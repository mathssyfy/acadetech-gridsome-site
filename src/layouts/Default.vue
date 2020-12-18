<template>
  <v-app :dark="setTheme">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list
        dense
        nav
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              AcadeteX
            </v-list-item-title>
            <v-list-item-subtitle>
              Start Learning
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider />
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"

          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item @click="miniVariant = !miniVariant">
          <v-list-item-icon>
            <v-icon>mdi-clock-start</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Collapse</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      dark

      hide-on-scroll
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      />
      <v-btn
        dark
        icon
        router
        exact
        to="/"
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn
        dark
        icon
        router
        exact
        to="/blogs"
      >
        <v-icon>mdi-school</v-icon>
      </v-btn>
      <v-spacer />

      <v-btn
        icon
        @click="goDark = !goDark"
      >
        <v-icon v-if="goDark">
          mdi-white-balance-sunny
        </v-icon>
        <v-icon v-else>
          mdi-moon-waxing-crescent
        </v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      goDark: false,
      scroll: 0,
      itemsExt: [
        {
          faIcon: 'github',
          title: 'Kelvin Git',
          to: 'https://github.com/kelvin2go',
          target: '_blank'
        }
      ],
      activenav: 'secundary',
      color: 'secondary',
      clipped: true,
      drawer: false,
      fixed: true,
      isSidebarOpen: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'AcadeTech',
      items: [
        { icon: 'mdi-home', title: 'Accueil', to: '/' },
        { icon: 'mdi-school', title: 'Blogs', to: '/blogs' }
        /* { icon: 'computer', title: 'Développement', to: '/dev' },
        { icon: 'computer', title: 'Cover', to: '/cover' } */
      ]
    }
  },
  computed: {
    setTheme () {
      if (this.goDark === true) {
        return (this.$vuetify.theme.dark = true)
      } else {
        return (this.$vuetify.theme.dark = false)
      }
    },
    setGoDark () {
      return this.goDark === !this.goDark
    }
  }
}
</script>
