<template>
  <Layout>
    <v-container class="mb-15">
      <v-row justify="center">
        <v-col xl="5" lg="7" md="10" sm="10">
          <v-img class="white--text" :src="$page.post.heroImage.file.url">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <h2 class="headline" style="text-shadow: 0px 2px 5px #222">
                    {{ $page.post.title }}
                  </h2>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>

          <p class="text-xs-right">
            <g-link :to="$page.post.heroImage.description"
              >{{ $page.post.heroImage.description }}
            </g-link>
          </p>
          <!-- <p>{{ $page.post.cloudinary.url }}</p>
          <h2 class="headline" style="text-shadow: 0px 2px 5px #222">
            {{ $page.post.cloudinary[0].url }}
            {{ $page.post.heroImage.file.url }}
          </h2>
          <v-img :src="$page.post.cloudinary[0].url"> </v-img> -->
          <gridsome-markdown-it :source="$page.post.body" />
        </v-col>
      </v-row>
    </v-container>
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
    cloudinary{
      url
      }
    body
    
    }
}
</page-query>

<script>
import GridsomeMarkdownIt from "@/components/GridsomeMarkdownIt";
export default {
  components: {
    GridsomeMarkdownIt,
  },
  metaInfo: {
    title: "AcadeTech",
    meta: [{ name: "author", content: "David Couronné" }],
  },
};
</script>
