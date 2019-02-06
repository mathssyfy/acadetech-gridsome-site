import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import DefaultLayout from '~/layouts/Default.vue'


// import 'vuetify/dist/vuetify.min.css'
import '@/assets/stylus/main.styl'

export default function (Vue) {
  Vue.use(Vuetify, {
    theme: {
      primary: '#121212', // a color that is not in the material colors palette
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }
  })
  Vue.component('Layout', DefaultLayout)
}
