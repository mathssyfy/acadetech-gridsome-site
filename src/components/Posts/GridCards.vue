<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        v-for="(card, idx) in cards"
        :key="idx"
        d-flex
        v-bind="{ [`xs${flex}`]: true }"
      >
        <v-card>
          <v-card-media
            v-if="card.src != ''"
            class="white--text"
            height="200px"
            :src="card.src"
          >
            <v-layout
              column
              class="media"
              style="cursor: pointer"
              @click.stop="toRoute('vuejs_view_article',{id: card.id})"
            >
              <v-card-title>
                <v-spacer />
                <v-btn
                  dark
                  icon
                >
                  <v-icon>thumb_up</v-icon>
                </v-btn>
              </v-card-title>
              <v-spacer />
              <v-card-title class="white--text pt-5">
                <div class="body-2 pl-5 pt-5">
                  {{ card.meta }}
                </div>
              </v-card-title>
            </v-layout>
          </v-card-media>
          <v-card-title>
            <div>
              <v-flex
                class="title"
                style="cursor: pointer"
                @click.stop="toRoute('vuejs_view_article',{id: card.id})"
              >
                {{ card.title }}
              </v-flex>
              <v-flex class="body-1">
                <span
                  v-if="card.subtitle.length > 140"
                  class="grey--text"
                >
                  {{ card.subtitle.substring(0, 140) }}... &nbsp;&nbsp;
                  <a href="#">read more</a>
                </span>
                <span
                  v-else
                  class="grey--text"
                >
                  {{ card.subtitle }} &nbsp;&nbsp;
                </span>
              </v-flex>
            </div>
            <v-layout
              row
              wrap
            >
              <v-flex
                v-for="(topic, index) in card.topics"
                :key="index"
              >
                <a href="">{{ topic }}</a>
              </v-flex>
            </v-layout>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'GridCards',
  data: () => ({
    cards: [
      {
        meta: 'Pre-fab homes',
        title: 'Pre-fab homes',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/house.jpg',
        created: '15 min',
        topics: ['deep learning', 'machine learning', 'A.I', 'distributed systems'],
        id: 1
      },
      {
        meta: 'Favorite road trips',
        title: 'Favorite road trips',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/road.jpg',
        created: '15 min',
        topics: ['deep learning', 'machine learning', 'A.I'],
        id: 2
      },
      {
        meta: 'Best airlines',
        title: 'Best airlines',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out? Some more content for testing list layout",
        src: 'https://vuetifyjs.com/static/doc-images/cards/plane.jpg',
        created: '15 min',
        topics: ['deep learning', 'machine learning'],
        id: 3
      },
      {
        meta: 'Pre-fab homes',
        title: 'Pre-fab homes',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/house.jpg',
        created: '15 min',
        topics: ['deep learning', 'machine learning', 'A.I'],
        id: 5
      },
      {
        meta: 'Favorite road trips',
        title: 'Favorite road trips',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/road.jpg',
        created: '15 min',
        topics: ['deep learning', 'machine learning', 'A.I'],
        id: 6
      },
      {
        title: 'Best airlines',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/plane.jpg',
        created: '15 min',
        topics: ['deep learning', 'machine learning', 'A.I'],
        id: 7
      },
      {
        title: 'Pre-fab homes',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/house.jpg',
        created: '15 min',
        topics: [],
        id: 8
      },
      {
        title: 'Favorite road trips',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/road.jpg',
        created: '15 min',
        id: 9
      },
      {
        title: 'Best airlines',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/plane.jpg',
        created: '15 min',
        id: 10
      },
      {
        title: 'Pre-fab homes',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/house.jpg',
        created: '15 min',
        id: 11
      },
      {
        title: 'Favorite road trips',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/road.jpg',
        created: '15 min',
        id: 12
      },
      {
        title: 'Best airlines',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/plane.jpg',
        created: '15 min',
        id: 13
      }
    ]
  }),
  computed: {
    flex () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 12
        case 'sm': return 6
        case 'md': return 4
        case 'lg': return 3
        case 'xl': return 2
      }
    }
  },
  created () {
  },
  methods: {
    toRoute (rname, rparams = {}, query = {}) {
      this.dialog = true
      this.$router.push({ name: rname, params: rparams, query: query })
    }
  }
}
</script>
