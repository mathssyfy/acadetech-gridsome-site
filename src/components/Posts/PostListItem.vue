<template lang="html">
  <v-card
    hover
    flat
    @click="handlePostcard"
  >
    <v-img
      class="white--text"
      height="200px"
      :src="item.node.heroImage.file.url.src"
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
              {{ item.node.title }}
            </h2>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
    <v-card-title>
      <div>
        <p
          v-if="item.node.author.name"
          class="grey--text"
        >
          {{ item.node.createdAt | date }} by {{ item.node.author.name }}
        </p>
        <p
          v-else
          class="grey--text"
        >
          {{ item.node.createdAt | date }}
        </p>
        <p>
          {{ item.node.description | truncate(200) | tailing('...') }}
        </p>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn
        color="success"
        routeur
        :to="`blog-post/${item.node.slug}`"
        flat
        outline
        dark
      >
        Read More
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }

}
</script>
