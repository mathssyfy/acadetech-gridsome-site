<template>
  <v-img
    class="white--text"
    :src="post.heroImage.file.url.src"
  >
    <v-container
      fill-height
      fluid
    >
      <v-layout fill-height>
        <v-flex
          xs12
          align-end
          flexbox
        >
          <h2
            class="headline"
            style="text-shadow: 0px 2px 5px #222;"
          >
            {{ post.title }}
          </h2>
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout
      fill-height
      column
      ma-0
    >
      <v-spacer />
      <v-flex
        class="text-xs-right"
        shrink
      >
        <span
          class="headline"
          style="text-shadow: 0px 2px 5px #222;"
        >
          img: {{ post.heroImage.description }}
        </span>
      </v-flex>
    </v-layout>
  </v-img>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
