<template>
  <Layout>
      
    <h1>{{ $page.post.title }}</h1>
    
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
    computed: {
        tests() {
            return '+ Routage ok :muscle:\n'
            + '+ KaTeX ok :punch:\n'
            + '+ Table Of Content :v:\n'
            + '+ Syntax Highlighting :sunglasses:\n'
            + '## TODO\n'
            + '+ Container :+1: CSS :-1:\n'
            + '+ Lines Numbering :alien:\n'
            + '+ Hop Gerflor !!! :heart_eyes:\n'
        }
    }
  
};
</script>
