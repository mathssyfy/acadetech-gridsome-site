<template>
  <Layout>
    <g-image
      alt="Example image"
      src="~/favicon.png"
      width="135"
    />
    <h1>Hello, world!</h1>
    <h2>Total Posts: {{ $page.posts.totalCount }}</h2>
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
export default {}
</script>
