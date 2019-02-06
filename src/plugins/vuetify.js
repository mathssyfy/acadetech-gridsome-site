import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

export function vuetify (Vue) {
  Vue.use(Vuetify, {
    theme: {
      primary: '#121212',
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }
  })
}
