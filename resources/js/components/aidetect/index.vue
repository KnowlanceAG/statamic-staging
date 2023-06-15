<template>
  <div>
    <div class="bg-gray-200 p-4">
      <textarea
        v-model="text"
        class="placeholder-gray-600 focus:placeholder-gray-400"
        placeholder="Ihr Text, mindestens 100 Wörter (mindestens 500 Zeichen erforderlich, maximal 5000 Zeichen erlaubt)." rows="4" />
      <div class="text-xs text-gray-600">{{ text.length }} Zeichen, {{ wordCount }} {{ wordCount > 0 ? 'Wörter' : 'Worte' }}</div>
      <div v-html="aiResult" class="py-4"></div>
      <div id="aicaptcha"></div>
      <button
        :disabled="!canSubmit"
        @click="submit"
        class="relative disabled:opacity-50 disabled:cursor-not-allowed bg-orange-500 hover:bg-orange-700 px-10 py-3 mt-8 inline-block text-white font-300 uppercase rounded-sm hover:transition-colors hover:duration-200 hover:bg-opacity-95" type="submit">
        <span :class="[{ 'opacity-0': calling }]">Absenden</span>
        <span :class="[{ 'opacity-1': calling, 'opacity-0': !calling }]">
          <div class="spinner absolute left-0 right-0 top-4">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
          </div>
        </span>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ai-detect',
   props: {
    options: {
      type: String,
      default: () => '{}'
    }
  },
  data() {
    return {
      turnstileUrl: 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback',
      turnstileId: false,
      idempotencyKey: null,
      turnstileResponse: false,
      text: '',
      calling: false,
      minCharacters: 500,
      maxCharacters: 5000,
      minWordCount: 100,
      aiResult: '',
      verified: false
    }
  },
  computed: {
    validTextLength() {
      return this.wordCount > this.minWordCount && this.text.length >= this.minCharacters && this.text.length <= this.maxCharacters
    },
    wordCount() {
      if (!this.text.length) return 0
      return this.text.trim().split(/\s+/).length;
    },
    canSubmit() {
      return this.turnstileResponse && this.validTextLength && !this.calling
    },
    parsedOptions() {
      if (!this.options) return {}
      try {
        return JSON.parse(this.options)
      } catch (e) {
        console.error('Error parsing options.', e)
      }
      return {}
    },
    url() {
      return this.parsedOptions.url || false
    },
    sitekey() {
      return this.parsedOptions.sitekey || false
    },
    verificationUrl() {
      return this.parsedOptions.verificationUrl || false
    }
  },
  methods: {
    async submit() {
      if (!this.url) {
        console.error('aidetect error: no url provided')
        return
      }
      this.calling = true

      try {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: this.text,
            turnstileResponse: this.turnstileResponse,
            idempotencyKey: this.idempotencyKey
          })
        }
        const response = await fetch(this.url, options)
        const result = await response.json()
        this.aiResult = result.answer ? result.answer : 'Keine Antwort vom Server. Bitte versuchen Sie es später erneut.'
      } catch (error) {
        this.aiResult = ''
        console.error('aidetect error: error calling backend', error)
      }
      this.calling = false
      this.resetTurnstile()
    },
    renderTurnstile() {
      this.turnstileId = window.turnstile?.render("#aicaptcha", {
        sitekey: this.sitekey,
        theme: 'light',
        callback: (response) => {
          // this.verifyTurnstileLoadResponse(response)
          this.turnstileResponse = response
        },
        'expired-callback': this.resetTurnstile,
        'error-callback': this.handleTurnstileError
      })
    },
    // async verifyTurnstileLoadResponse(response) {
    //   if (
    //     response !== null &&
    //     response !== '' &&
    //     this.verificationUrl
    //   ) {

    //     this.turnstileResponse = response
    //     try {
    //       const body = JSON.stringify({ turnstileResponse: this.turnstileResponse })
    //       const options = {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body
    //       }
    //       const response = await fetch(this.verificationUrl, options)
    //       const result = await response.json()
    //       console.log('turnstile result', result)
    //       this.verified = result?.success
    //       this.idempotencyKey = result.idempotency_key
    //       // if (this.verified && this.turnstileId) {
    //       //   console.log('removing turnstile now', this.turnstileId)
    //       //   window.turnstile.remove(this.turnstileId)
    //       // }
    //     } catch (error) {
    //       this.aiResult = ''
    //       console.error('aidetect error: error calling backend', error)
    //     }
    //   }
    // },

    resetTurnstile() {
      console.log('reset Turnstile')
      this.verified = false
      this.turnstileResponse = false
      window.turnstile?.reset(this.turnstileId)
    },
    handleTurnstileError(e) {
      console.error('aidetect: Turnstile error', e)
    }
  },
  mounted() {
    if (window.turnstile === null || !window.turnstile) {
      const script = document.createElement('script')
      script.src = this.turnstileUrl
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    } else {
      this.renderTurnstile()
    }
    window.onloadTurnstileCallback = this.renderTurnstile
  }
}
</script>
