import Vuetify from 'vuetify'
import DefaultLayout from '~/layouts/Default.vue'

// import 'vuetify/dist/vuetify.min.css'
import '@/assets/stylus/main.styl'

export default function (Vue) {
  Vue.use(Vuetify)
  Vue.component('Layout', DefaultLayout)
}
