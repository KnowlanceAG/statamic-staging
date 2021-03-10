<template>
  <div>
    <div v-if="!ready" class="card p-3 text-center">
      <loading-graphic />
    </div>
    <div v-else-if="!running" class="card p-3 text-center">
      <div class="flex items-center mb-3">
        <p>Start the generation of static html output.</p>
      </div>
      <button class="btn btn-md" v-text="__('Run')" @click.prevent="run" />
    </div>
    <div v-else class="card p-3 text-center">
      <div
        ref="output"
        class="whitespace-pre-wrap h-96 overflow-auto ssgenerator-output"
        v-html="coloredOutput"
      />
      <div v-if="completed">
        <div class="flex items-center completed-text">
          <p>Generation completed.</p>
        </div>
        <button class="btn btn-md" v-text="__('Back')" @click.prevent="reset" />
      </div>
    </div>
  </div>
</template>

<script>
const Ansi = require('ansi-to-html')
export default {
  name: 'ssgenerator',
  data() {
    return {
      ready: false,
      running: false,
      completed: false,
      output: false,
      cacheKey: null,
      ssgProcess: null
    }
  },
  watch: {
    output() {
      this.$nextTick(() => {
        const div = this.$refs.output
        div.scrollTop = div.scrollHeight - div.clientHeight
      })
    }
  },
  computed: {
    coloredOutput() {
      return new Ansi({
        fg: '#c7c7c7',
        bg: '#000000',
        newline: true,
        stream: true,
        colors: [
          '#000000',
          '#c91b00',
          '#00c200',
          '#c7c400',
          '#0225c7',
          '#c930c7',
          '#00c5c7',
          '#c7c7c7',
          '#676767',
          '#ff6d67',
          '#5ff967',
          '#fefb67',
          '#6871ff',
          '#ff76ff',
          '#5ffdff',
          '#feffff'
        ]
      }).toHtml(this.output || '')
    },
    toEleven() {
      return { timeout: Statamic.$config.get('ajaxTimeout') }
    }
  },
  methods: {
    run() {
      console.log('Running generator.')

      try {
        this.cacheKey = `ssg-${Date.now()}`
        this.running = true
        this.$axios.get(
          cp_url(`/cpssg/generate`),
          { params: { cacheKey: this.cacheKey } },
          this.toEleven
        )
        this.startPolling()
      } catch (err) {
        console.error(`${this.name}: Error on start of job`, err)
      }
    },
    startPolling() {
      this.ssgProcess = window.setInterval(() => {
        this.checkProcess()
      }, 1000)
    },
    stopPolling() {
      window.clearInterval(this.ssgProcess)
      this.ssgProcess = null
    },
    async checkProcess() {
      try {
        const response = await this.$axios.get(cp_url('/cpssg/check'), {
          params: {
            cacheKey: this.cacheKey
          }
        })

        if (response.data.output === false) {
          return this.processFinished()
        }

        this.output = (response.data.output || '').replace(/\[1A/g, '')

        if (response.data.completed) {
          return this.processFinished()
        }
      } catch (err) {
        console.error(`${this.name}: Error in checkProcess`, err)
      }
    },
    processFinished() {
      this.stopPolling()
      this.completed = true
    },
    reset() {
      this.running = false
      this.completed = false
    }
  },
  mounted() {
    this.ready = true
  }
}
</script>

<style lang="css">
.ssgenerator-output {
  background-color: black;
  text-align: left;
  padding-left: 20px;
  font-size: 0.8rem;
}
.cmopleted-text {
  margin-top: 20px;
  padding-left: 10px;
}
</style>
