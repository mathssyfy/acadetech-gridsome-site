<template lang="html">
  <v-card
    class="ma-5"
          elevation="3"
          width="500"
    routeur
    :to="`blog/${item.node.slug}`"
  >
    <v-img
      cover
      :aspect-ratio="16/9"
      :src="item.node.heroImage.file.url"
    />
    <v-card-title>
      
        {{ item.node.title }}
    </v-card-title>  
    <v-card-subtitle>Par {{ item.node.author.name }}</v-card-subtitle>
    <v-card-subtitle>{{ item.node.createdAt | date }}</v-card-subtitle>  
    <v-card-actions>
      <v-btn
        color="success"
        routeur
        :to="`blog/${item.node.slug}`"
        text
        outlined
        dark
      >
        Continuer de lire {{ item.node.path }}
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
