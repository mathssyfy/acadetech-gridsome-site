<template>
  <Layout>
    
    <v-layout
    justify-center
    >
    
    
    <gridsome-markdown-it :source="$page.post.body"/>
   
    </v-layout>
    
  </Layout>
</template>

<page-query>
query postQuery($path: String!) {
    post: contentfulBlogPost(path: $path){
    title
    publishDate(format: "D. MMMM YYYY")
    heroImage{
    description
    file{url}
    }
    body
    }
}
</page-query>

<script>
import GridsomeMarkdownIt from "@/components/GridsomeMarkdownIt";
export default {
  components: {
    GridsomeMarkdownIt
  },
  metaInfo: {
    title: "AcadeTech",
    meta: [{ name: "author", content: "David Couronné" }]
  }
};
</script>


