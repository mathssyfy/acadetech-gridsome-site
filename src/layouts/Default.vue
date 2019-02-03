<template>
  <v-app>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
      rel="stylesheet"
    >
    <v-navigation-drawer
      v-model="drawer"
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
    </v-navigation-drawer>

    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
      dark
      color="primary"
    >
      <v-btn

        dark
        icon
        @click.stop="drawer = !drawer"
      >
        <v-icon>reorder</v-icon>
      </v-btn>
      <v-btn
        dark
        icon
        router
        exact
        to="/"
      >
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn
        dark
        icon
        router
        exact
        to="/blogs"
      >
        <v-icon>school</v-icon>
      </v-btn>
      <!--<v-btn
        dark
        icon
        router
        exact
        to="/dev"
      >
        <v-icon>computer</v-icon>
      </v-btn> -->

      <!-- <v-toolbar-title v-text="title"/> -->

      <v-spacer />
    </v-toolbar>
    <v-content>
      <slot />
    </v-content>

    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019 MIT David Couronné</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      activenav: 'secundary',
      color: 'secondary',
      clipped: true,
      drawer: null,
      fixed: false,
      isSidebarOpen: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'AcadeTech',
      items: [
        { icon: 'home', title: 'Accueil', to: '/' },
        { icon: 'school', title: 'Blogs', to: '/blogs' }
        /* { icon: 'computer', title: 'Développement', to: '/dev' },
        { icon: 'computer', title: 'Cover', to: '/cover' } */
      ]
    }
  }

}
</script>
