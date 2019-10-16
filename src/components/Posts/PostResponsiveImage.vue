<template>
  <v-layout>
    <v-responsive :aspect-ratio="2/1">
      <v-img class="white--text" :src="$page.post.heroImage.file.url.src">
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
  </v-layout>
</template>
