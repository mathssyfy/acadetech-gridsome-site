<template>
  <Layout>
    <img-break-point></img-break-point>
    <!-- <hero-image /> -->
    <!-- aspect-ratio="1.7" -->
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

    <h1>Hello, world!</h1>

    <div
      v-for="item in $page.posts.edges"
      :key="item.slug"
    >
      <h3>
        <g-link :to="`blog-post/${item.node.slug}`">
          {{ item.node.title }}
        </g-link>
      </h3>
      <small>{{ item.node.createdAt }}</small>
      <!-- <p>{{ item.node.metadata.description }}</p> -->
    </div>
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
import ImgBreakPoint from '@/components/img/BreakPoint'
export default {
  components: {
    HeroImage,
    ImgBreakPoint
  }
}
</script>
