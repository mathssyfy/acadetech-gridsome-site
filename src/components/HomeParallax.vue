<template>
  <section>
    <v-parallax
      :src="require('@/assets/img/art-dark-dawn.jpg')"
      height="600"
       position="bottom"
    >
      <v-layout
        column
        align-center
        justify-center
        class="white--text"
      >
        <!-- <img
          :src="require('@/assets/img/hero3.jpg')"
          alt="Vuetify.js"
          height="200"
        > -->
        <h1 class="white--text mb-2 display-3 text-xs-center">
          AcadeTech
        </h1>
        <div class="subheading mb-3 text-xs-center">
          Powered by @mathssyfy
        </div>
       
        <v-btn
            class="mt-5 white white--text"
            dark
            large
            outline
            round
            href="/blogs"
          >
            Get Started
          </v-btn>
      </v-layout>
    </v-parallax>
  </section>
</template>
