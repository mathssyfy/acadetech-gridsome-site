<template>
  <Layout>
    <h1>{{ $page.post.title }}</h1>
    <v-img :src="$page.post.heroImage.file.url.src" />
    <h1>{{ $page.post.heroImage.file.url.src }}</h1>
    <gridsome-markdown-it
      :source="$page.post.body"
    />
  </Layout>
</template>

<page-query>
query postQuery($path: String!) {
    post: contentfulBlogPost(path: $path){
    title
    publishDate(format: "D. MMMM YYYY")
  heroImage{file{url}}
    body
    }
}
</page-query>

<script>
import GridsomeMarkdownIt from '@/components/GridsomeMarkdownIt'
export default {
  components: {
    GridsomeMarkdownIt
  },
  metaInfo: {
    title: 'AcadeTech',
    meta: [
      { name: 'author', content: 'David Couronné' }
    ],
  }

}
</script>
