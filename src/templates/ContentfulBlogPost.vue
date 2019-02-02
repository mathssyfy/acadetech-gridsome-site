<template>
  <Layout>
      <h1>Test MD</h1>
    
    <h3>Routing ok</h3>
    <p>{{ $page.post.title }}</p>
    
    <gridsome-markdown-it
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
import GridsomeMarkdownIt from '@/components/GridsomeMarkdownIt'
export default {
    components: {
        GridsomeMarkdownIt
    },
  
};
</script>
