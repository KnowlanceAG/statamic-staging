<template>
  <div id="form_preisrechner" class="p-8">
    <h2 class="text-2xl pb-8">Preisrechner</h2>
    <div class="grid lg:grid-cols-2 gap-8">
      <div>
        <label for="service" class="block uppercase tracking-wide text-black text-xs mt-4 mb-1">
          Leistung
        </label>
        <div class="section-wrapper">
            <select v-model="service" id="service" class="w-full">
                <option value="">Leistung wählen..</option>
                <option
                    v-for="service in services"
                    :key="service"
                    :value="service"
                >
                    {{ service }}
                </option>
            </select>
        </div>
      </div>
      <div>
        <label for="specialField" class="block uppercase tracking-wide text-black text-xs mt-4 mb-1">
          Fachbereich
        </label>
        <div class="section-wrapper">
            <select v-model="specialField" id="specialField" class="w-full">
                <option value="">Fachbereich wählen..</option>
                <option
                    v-for="specialField in Object.keys(options.specialField)"
                    :key="specialField"
                    :value="specialField"
                >
                    {{ specialField }}
                </option>
            </select>
        </div>
      </div>
      <div>
        <label for="qualityLevel" class="block uppercase tracking-wide text-black text-xs mt-4 mb-1">Qualitätslevel</label>
        <div class="section-wrapper">
            <select v-model="qualityLevel" id="qualityLevel" class="w-full">
                <option value="">Qualitätslevel wählen..</option>
                <option
                    v-for="qualityLevel in Object.keys(options.qualityLevel)"
                    :key="qualityLevel"
                    :value="qualityLevel"
                >
                    {{ qualityLevel }} - {{ options.qualityDescription[qualityLevel] }}
                </option>
             </select>
        </div>
      </div>
      <div class="grid lg:grid-cols-3 gap-8">
        <div>
            <label for="pages" class="block uppercase tracking-wide text-black text-xs mt-4 mb-1">Seiten</label>
            <input
                v-model="pages"
                type="number"
                inputmode="numeric"
                pattern="[0-9]+"
                autocomplete="off"
                min="0"
                max="9999"
                id="pages"
                class="w-full"
                @input="validatePages"
            />
        </div>
        <div class="lg:col-span-2">
            <div class="grid lg:grid-cols-2">
                <label for="timeUnit" class="block uppercase tracking-wide text-black text-xs mt-4 mb-1 col-span-2">
                    Zeit bis zur Abgabe
                </label>
            </div>
            <div class="grid lg:grid-cols-2 gap-x-8">
                <input
                    v-model="timeUnit"
                    type="number"
                    inputmode="numeric"
                    pattern="[0-9]+"
                    autocomplete="off"
                    min="1"
                    max="99999"
                    id="timeUnit"
                    class="w-full pr-2"
                />
                <div class="section-wrapper">
                    <select v-model="timeType" id="timeType" class="w-full">
                        <option
                        v-for="timeType in timeTypeOptions"
                        :key="timeType.key"
                        :value="timeType.value"
                        >
                        {{ timeType.key }}
                        </option>
                    </select>
                </div>
            </div>
        </div>
      </div>
      <div>
        <p class="text-xs leading-5">
            Die angezeigte Preiskalkulation für die Qualitätsstufe "Academic"
            dient zur Vermittlung einer groben Preisvorstellung und beruht auf
            einer literaturbasierten Arbeit ohne eigene Forschung.
            Ein individuelles &amp; unverbindliches Preisangebot erhalten Sie
            innerhalb weniger Stunden über das nebenstehend verlinkte Anfrageformular,
            per Mail oder Telefon.
        </p>
      </div>
      <div>
        <div class="bg-gray-200">
          <p v-if="pagesPerDay > 50" class="p-4 text-xs leading-5 text-red-500 bg-red-300 border border-red-400">
            Es können maximal 50 Seiten pro Tag bearbeitet werden, bitte
            korrigieren Sie Ihre Eingabe.
          </p>
          <div v-else-if="result" class="p-4 text-green-500 bg-green-300 border border-green-400">
            <label class="control-label">berechneter Preis</label>
            <h2
              id="preisrechner_result"
              style="margin-bottom: 0px; line-height: 30px; font-size: 28px"
            >
              {{ result }}
            </h2>
            <label class="control-label">inkl. MwSt.</label>
          </div>
          <p v-else class="p-4 text-xs leading-5 text-green-500 bg-green-300 border border-green-400">
            Bitte alle Felder ausfüllen, vorher kann kein Preis berechnet
            werden.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { options } from './options.js'

export default {
  name: 'Preisrechner',
  props: {
    options: {
      type: Object,
      default: () => {
        return options
      }
    }
  },
  data() {
    return {
      service: '',
      specialField: '',
      qualityLevel: '',
      pages: 20,
      timeUnit: 14,
      timeType: 1
    }
  },
  watch: {
    pages: function(value) {
      if (value > 9999) this.pages = 9999
      if (value < 0) this.pages = 1
    },
    timeUnit: function(value) {
      if (value > 999999) this.timeUnit = 999999
    }
  },
  computed: {
    services() {
      return Object.keys(this.options.service[this.topLevelDomain])
    },
    timeTypeOptions() {
      return this.mapArrays(this.options.timeType)
    },
    daysToDeliver() {
      return parseInt(this.timeUnit) * parseInt(this.timeType)
    },
    pagesPerDay() {
      if (
          !this.daysToDeliver
          || this.daysToDeliver < 1
          || !this.pages
        ) return null

      return this.pages / this.daysToDeliver
    },
    pagesPerDayIndex() {
      if (!this.pagesPerDay) return null
      const index = this.options.pagesPerDay.find(
        p => this.pagesPerDay <= p.threshold
      )
      if (!index) return null
      return index.value
    },
    pageFactorIndex() {
      const index = this.options.pageFactor.find(p => this.pages <= p.threshold)
      if (!index) return null
      return index.value
    },
    complete() {
      return (
        this.pages &&
        this.service && options.service[this.topLevelDomain][this.service] &&
        this.specialField && options.specialField[this.specialField] &&
        this.qualityLevel && options.qualityLevel[this.qualityLevel] &&
        this.pagesPerDayIndex &&
        this.pageFactorIndex
      )
    },
    topLevelDomain() {
      const tld = window.location.origin.split('.').pop()
      return ['me', 'test', 'net'].includes(tld) ? 'de' : tld
    },
    result() {
      if (!this.complete) return false

      const tld = this.topLevelDomain
      const localeString = tld === 'de' ? 'de-DE' : 'de-CH'
      const currency = tld === 'de' ? 'EUR' : 'CHF'

      if (options.service[tld][this.service].fixed) {
        const result = options.service[tld][this.service].price
        return result.toLocaleString(localeString, {
        style: 'currency',
        currency
        })
      }

      const result =
        Number.parseInt(this.pages) *
        options.service[tld][this.service].price *
        options.specialField[this.specialField] *
        options.qualityLevel[this.qualityLevel] *
        Number.parseFloat(this.pagesPerDayIndex) *
        Number.parseFloat(this.pageFactorIndex)

      return result.toLocaleString(localeString, {
        style: 'currency',
        currency
      })
    }
  },
  methods: {
    validatePages({ target }) {
      this.pages = Number.parseInt(target.value)
    },
    mapArrays(array) {
      if (!array) return []
      return array.map(o => {
        const key = Object.keys(o)[0]
        return { key: key, value: o[key] }
      })
    }
  }
}
</script>
