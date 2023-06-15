import Vue from 'vue'
import Preisrechner from './components/Preisrechner/index.vue';
import AIDetect from './components/aidetect/index.vue';

Vue.component('preisrechner', Preisrechner)
Vue.component('ai-detect', AIDetect)
new Vue({ el: '#app' })
