<template lang="html">
  <v-card
    hover
    flat
    routeur
    :to="`blog-post/${item.node.slug}`"
  >
    <v-img
      height="200px"
      :src="item.node.heroImage.file.url"
    />
    <v-card-title>
      <h2
        class="headline"
        style="text-shadow: 0px 2px 5px #222;"
      >
        {{ item.node.title }}
      </h2>
      <div>
        <p
          v-if="item.node.author.name"
          class="grey--text"
        >
          {{ item.node.createdAt | date }}
        </p>
        <p
          v-else
          class="grey--text"
        >
          {{ item.node.createdAt | date }}
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
        Continuer de lire
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
