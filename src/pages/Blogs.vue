<template>
  <Layout>
    <v-container>
      <v-layout
        row
        wrap
      >
        <v-flex
          v-for="item in $page.posts.edges"
          :key="item.slug"
          xs12
          sm6
          lg4
          pa-2
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
          heroImage{file{url}}
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
  }
}
</script>
