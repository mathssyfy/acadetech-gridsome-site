<template>
  <Layout>
    <h3>Routing ok</h3>
    <p>{{ $page.post.title }}</p>
    <p>{{ $page.post.body }}</p>
    <vue-markdown
      :source="$page.post.body"
    />
  </Layout>
</template>

<page-query>
query postQuery($path: String!) {
    post: contentfulBlogPost(path: $path){
    title
    body
    }
}
</page-query>

<script>

export default {
  components: {

  }

}
</script>
