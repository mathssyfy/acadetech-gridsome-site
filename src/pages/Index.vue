<template>
  <!-- <Layout> -->
    <v-app>
      <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
      rel="stylesheet"
    >
      <home-parallax></home-parallax>
    
    <home-features />
    <hero-image />
    
    <v-footer :fixed="fixed" :clipped="clipped">
      <v-flex xs12>
        <div class="grey--text darken-2 ml-3">
          &copy; 2019 MIT Made with
          <v-icon class="green--text">
            favorite
          </v-icon>by
          <a href="https://github.com/mathssyfy/acadetech-gridsome-site">
            David Couronné
          </a>
        </div>
      </v-flex>
    </v-footer>
    </v-app>
  <!-- </Layout> -->
</template>

<page-query>
  query IndexQuery {
    posts: allContentfulBlogPost {
      totalCount
      edges {
        node {
          id
          slug
          title
          createdAt
         }
      }

    }
  }
</page-query>

<script>
import HeroImage from '@/components/HeroImage'
import HomeFeatures from '@/components/HomeFeatures'
import HomeParallax from '@/components/HomeParallax'

export default {
  components: {
    HeroImage,
    HomeFeatures,
    HomeParallax
  },
  metaInfo: {
    title: 'AcadeTech',
    meta: [{ name: 'author', content: 'David Couronné' }]
  }
}
</script>
