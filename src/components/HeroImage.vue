<template>
  <v-layout
    v-resize="onResize"
    column
    align-center
    justify-center
  >
    <v-img
      :src="require('@/assets/img/astrology-astronomy-atmosphere.jpg')"
      :height="windowSize.y"
      :width="windowSize.x"
      position="bottom"
    >
      <v-layout
        column
        align-center
        justify-center
      >
        <img
          :src="require('@/assets/img/acadetech-icon.svg')"
          alt="AcadeTech logo"
        >
        <div class="display-3 white--text mb-3 text-xs-center">
          {{ mainTitle }}
        </div>
        <em class="white--text">
          {{ subTitle }}
        </em>
        <v-layout
          column
          justify-space-between
        >
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
      </v-layout>
    </v-img>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    mainTitle: 'AcadeTech',
    subTitle: 'Kick-start your learning curve !',
    btnText: 'Get Started',
    windowSize: {
      x: 0,
      y: 0
    }
  }),

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
