<template>
  <v-img
    :src="require('@/static/img/astrology-astronomy-atmosphere.jpg')"
       
  >
    <v-layout
      column
      align-center
      justify-center
    >
      <div class="display-3 white--text mb-3 text-xs-center">
        {{ mainTitle }}
      </div>
      <em class="white--text">
        {{ subTitle }}
      </em>
      <v-btn
        class="mt-5 white white--text"
        dark
        large
        outline
        round
        href="/blogs"
      >
        {{ btnText }}
      </v-btn>
    </v-layout>
  </v-img>
</template>

<script>
export default {
  data () {
    return {
      mainTitle: 'AcadeTech',
      subTitle: 'Kick-start your learning curve !',
      btnText: 'Get Started',
      windowSize: {
        x: 0,
        y: 0
      }
    }
  },
  mounted () {
      this.onResize()
    },

    methods: {
      onResize () {
        this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      }
    }
}
</script>

<style lang="scss" scope>
  .v-layout {
    font-family: Raleway, Helvetica, Arial, sans-serif;
    z-index: 100;
    font-size: 28px;
  }
</style>