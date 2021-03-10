import SSGenerator from './components/SSGenerator.vue'

/* global Statamic */
Statamic.booting(() => {
  Statamic.$components.register('ssgenerator', SSGenerator)
})
