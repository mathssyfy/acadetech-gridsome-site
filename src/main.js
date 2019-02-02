import Vuetify from 'vuetify'
import DefaultLayout from '~/layouts/Default.vue'

import 'vuetify/dist/vuetify.min.css'

export default function (Vue) {
  Vue.use(Vuetify)
  Vue.component('Layout', DefaultLayout)
}