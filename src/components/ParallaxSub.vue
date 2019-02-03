<template>
  <v-parallax
    :src="require('@/static/img/astrology-astronomy-atmosphere.jpg')"
    height="500"
  >
    <v-layout
      column
      align-center
      justify-center
    >
      <div class="display-3 white--text mb-3 text-xs-center">
        {{ mainTitle }}
      </div>
      <em>{{ subTitle }}</em>
      <v-btn
        class="mt-5 white white--text"
        dark
        large
        outline
        round
        href="/showcases"
      >
        {{ btnText }}
      </v-btn>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  data () {
    return {
      mainTitle: 'Web development has never been easier',
      subTitle: 'Kick-start your application today',
      btnText: 'Get Started'
    }
  }
}
</script>

<style lang="scss" scope>
  .v-parallax {
    font-family: Raleway, Helvetica, Arial, sans-serif;
    z-index: 100;
    font-size: 28px;
  }
</style>
