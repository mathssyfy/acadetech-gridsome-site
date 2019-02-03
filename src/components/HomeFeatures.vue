<template>
  <section>
    <v-layout
      column
      wrap
      class="my-5"
      align-center
    >
      <v-flex
        xs12
        class="midContainer"
      >
        <v-container grid-list-xl>
          <v-layout
            row
            wrap
            align-center
          >
            <v-flex
              xs12
              md4
            >
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <img
                    src="@/static/img/logo.png"
                    width="40"
                    height="40"
                  >
                </v-card-text>
                <v-card-title
                  primary-title
                  class="layout justify-center"
                >
                  <div class="headline text-xs-center">
                    Gridsome
                  </div>
                </v-card-title>
                <v-card-text>
                  Gridsome is a Vue-powered static site generator for building CDN-ready websites for any headless CMS, local files or APIs.
                  <v-card-text class="text-xs-center">
                    <v-btn
                      outline
                      round
                      color="success"
                      href="https://gridsome.org/"
                      target="_blank"
                    >
                      Gridsome
                    </v-btn>
                  </v-card-text>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex
              xs12
              md4
            >
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <img
                    src="@/static/img/vuetify-logo.svg"
                    width="40"
                    height="40"
                  >
                </v-card-text>
                <v-card-title
                  primary-title
                  class="layout justify-center"
                >
                  <div class="headline">
                    Vuetify
                  </div>
                </v-card-title>
                <v-card-text>
                  Semantic Material Components
                  Be prepared for an armada of specialized components at your disposal. With over 80 in total, there is a solution for any application.
                  <v-card-text class="text-xs-center">
                    <v-btn
                      outline
                      round
                      color="info"
                      href="https://vuetifyjs.com/en/"
                      target="_blank"
                    >
                      Vuetify
                    </v-btn>
                  </v-card-text>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex
              xs12
              md4
            >
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <img
                    src="@/static/img/contentful-logo.svg"
                    width="40"
                    height="40"
                  >
                </v-card-text>
                <v-card-title
                  primary-title
                  class="layout justify-center"
                >
                  <div class="headline">
                    Contentful
                  </div>
                </v-card-title>
                <v-card-text>
                  Contentful provides a content infrastructure that enables teams to power content in any digital product.
                  gridsome + contentful have no harzzel on server content now. Fast. Flexible. Future-proof.
                  <v-card-text class="text-xs-center">
                    <v-btn
                      outline
                      round
                      color="error"
                      href="https://www.contentful.com/developers/docs/javascript/tutorials/integrate-contentful-with-vue-and-nuxt/"
                      target="_blank"
                    >
                      Contentful
                    </v-btn>
                  </v-card-text>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </section>
</template>
