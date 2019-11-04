<template>
  <v-app :dark="setTheme">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          :active-class="color"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
        <v-divider />
      </v-list>

      <v-list subheader>
        <v-list-tile>
          <v-btn
            icon
            @click="miniVariant = !miniVariant"
          >
            <v-icon>mdi-photo_size_select_small</v-icon>
          </v-btn>
        </v-list-tile>
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

    <v-responsive
      class="mx-auto overflow-visible"
      max-width="1024"
    >
    <v-container>
    <v-responsive
          class="overflow-visible"
          min-height="90vh"
        >
      <slot />
    </v-responsive>
    </v-container>
    </v-responsive>
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
      if (this.goDark == true) {
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
