<template>
  <v-card>
    <v-img
      src="https://res.cloudinary.com/dpw19qolx/image/upload/v1573405573/art-dark-dawn.jpg"
      height="600"
    >
      <v-layout
        column
        align-center
        justify-center
        class="white--text"
        fill-height
      >
        <img
          :src="require('@/assets/img/acadetech-icon.svg')"
          alt="AcadeTech"
        >
        <img
          :src="require('@/assets/img/dessin.svg')"
          height="150px"
          alt="Dinosaure"
        >

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
          outlined
          rounded
          href="/blogs"
        >
          Get Started
        </v-btn>
      </v-layout>
    </v-img>
  </v-card>
</template>
