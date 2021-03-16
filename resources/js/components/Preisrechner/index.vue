<template>
  <div id="form_preisrechner" class="p-8">
    <h2 class="text-2xl pb-8">Preisrechner</h2>
    <div class="grid md:grid-cols-2 gap-4">
      <div>
        <label for="service" class="block">
          Leistung
        </label>
        <select v-model="service" id="service" class="w-full">
          <option value="">Leistung wählen..</option>
          <option
            v-for="service in serviceOptions"
            :key="service.key"
            :value="service.value"
          >
            {{ service.key }}
          </option>
        </select>
      </div>
      <div>
        <label for="specialField" class="block">
          Fachbereich
        </label>
        <select v-model="specialField" id="specialField" class="w-full">
          <option value="">Fachbereich wählen..</option>
          <option
            v-for="specialField in specialFieldOptions"
            :key="specialField.key"
            :value="specialField.value"
          >
            {{ specialField.key }}
          </option>
        </select>
      </div>
      <div>
        <label for="qualityLevel" class="block">Qualitätslevel</label>
        <select v-model="qualityLevel" id="qualityLevel" class="w-full">
          <option value="">Qualitätslevel wählen..</option>
          <option
            v-for="qualityLevel in qualityLevelOptions"
            :key="qualityLevel.key"
            :value="qualityLevel.value"
          >
            {{ qualityLevel.key }}
          </option>
        </select>
      </div>
      <div class="grid md:grid-cols-3 gap-4">
        <div>
          <label for="pages" class="block">Seiten</label>
          <input
            v-model="pages"
            type="number"
            pattern="\d*"
            autocomplete="off"
            max="9999"
            id="pages"
            class="w-full"
          />
        </div>

        <div class="grid grid-cols-2 col-span-2">
          <label for="timeUnit" class="block col-span-2">
            Zeit bis zur Abgabe
          </label>
          <input
            v-model="timeUnit"
            type="number"
            pattern="\d*"
            autocomplete="off"
            max="99999"
            id="timeUnit"
            class="w-full"
          />
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
      <div>
        <p>
          <small>
            Die angezeigte Preiskalkulation dient zur Vermittlung einer groben
            Preisvorstellung. Ein individuelles &amp; unverbindliches
            Preisangebot erhalten Sie innerhalb weniger Stunden über das
            nebenstehend verlinkte Anfrageformular, per Mail oder Telefon.
          </small>
        </p>
      </div>
      <div>
        <div class="bg-gray-200 p-4">
          <div v-if="result">
            <label class="control-label">berechneter Preis</label>
            <h2
              id="preisrechner_result"
              style="margin-bottom: 0px; line-height: 30px; font-size: 28px"
            >
              {{ result }}
            </h2>
            <label class="control-label">inkl. MwSt.</label>
          </div>
          <div v-else>
            <p v-if="pagesPerDay > 50">
              Es können maximal 50 Seiten pro Tag bearbeitet werden, bitte
              korrigieren Sie Ihre Eingabe.
            </p>
            <p v-else>
              Bitte alle Felder ausfüllen, vorher kann kein Preis berechnet
              werden.
            </p>
          </div>
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
    },
    timeUnit: function(value) {
      if (value > 999999) this.timeUnit = 999999
    }
  },
  computed: {
    serviceOptions() {
      return this.mapArrays(this.options.service)
    },
    specialFieldOptions() {
      return this.mapArrays(this.options.specialField)
    },
    qualityLevelOptions() {
      return this.mapArrays(this.options.qualityLevel)
    },
    timeTypeOptions() {
      return this.mapArrays(this.options.timeType)
    },
    daysToDeliver() {
      return parseInt(this.timeUnit) * parseInt(this.timeType)
    },
    pagesPerDay() {
      if (!this.daysToDeliver || !this.pages) return null
      return this.pages / this.daysToDeliver
    },
    pagesPerDayIndex() {
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
        this.service &&
        this.specialField &&
        this.qualityLevel &&
        this.pagesPerDayIndex &&
        this.pageFactorIndex
      )
    },
    result() {
      if (!this.complete) return false
      const result =
        this.pages *
        this.service *
        this.specialField *
        this.qualityLevel *
        this.pagesPerDayIndex *
        this.pageFactorIndex

      return result.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR'
      })
    }
  },
  methods: {
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
