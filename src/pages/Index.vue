<template>
  <Layout>
    <hero-image />
    <home-features />
    <v-layout
      align-center
      column
      justify-center
    >
      <h1 class="display-2 font-weight-thin mb-3">
        AcadeTech
      </h1>
      <h2>Total Posts: {{ $page.posts.totalCount }}</h2>
    </v-layout>
  </Layout>
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

export default {
  components: {
    HeroImage,
    HomeFeatures
  },
  metaInfo: {
    title: 'AcadeTech',
    meta: [
      { name: 'author', content: 'David Couronné' }
    ]
  }
}
</script>
