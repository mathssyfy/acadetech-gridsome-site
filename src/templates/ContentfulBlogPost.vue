<template>
  <Layout>
    <v-responsive :aspect-ratio="2/1">
      <v-img class="white--text" :src="$page.post.heroImage.file.url">
        <v-container fill-height fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <h2 class="headline" style="text-shadow: 0px 2px 5px #222;">{{ $page.post.title }}</h2>
            </v-flex>
          </v-layout>
        </v-container>
      </v-img>
    </v-responsive>
    
    <p class="text-xs-right">
      <a :to="$page.post.heroImage.description">img: {{ $page.post.heroImage.description }}</a>
    </p>
   
    <gridsome-markdown-it :source="$page.post.body"/>
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


