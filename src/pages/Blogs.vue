<template>
  <Layout>
    <v-container
      fluid
      grid-list-md
    >
      <v-layout
        row
        wrap
      >
        <v-flex
          v-for="item in $page.posts.edges"
          :key="item.slug"
          v-bind="{ [`xs${flex}`]: true }"
        >
          <post-list-item :item="item" />
        </v-flex>
      </v-layout>
    </v-container>
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
          description
          heroImage{
            description
            file{url}}
          author{name}
          createdAt(format: "D. MMMM YYYY")
         }
      }

    }
  }
</page-query>

<script>
import PostListItem from '@/components/Posts/PostListItem'
export default {
  components: {
    PostListItem
  },
  computed: {
    flex () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 12
        case 'sm': return 6
        case 'md': return 4
        case 'lg': return 3
        case 'xl': return 2
      }
    }
  }
}
</script>
