<template>
  <div>
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.css" integrity="sha384-xNwWFq3SIvM4dq/1RUyWumk8nj/0KFg4TOnNcfzUU4X2gNn3WoRML69gO7waf3xh" crossorigin="anonymous"> -->

    <div v-html="body" />
  </div>
</template>

<script>
import 'prismjs/themes/prism-dark.css'
import 'katex/dist/katex.css'
export default {
  props: {
    source: {
      type: String,
      default: 'Hello World ;)'

    }
  },
  computed: {
    body () {
      const md = require('markdown-it')()
      const prism = require('markdown-it-prism')
      const katex = require('markdown-it-katex-newcommand')
      const anchor = require('@mathssyfy/markdown-it-anchor')
      const toc = require('markdown-it-table-of-contents')
      const emoji = require('markdown-it-emoji')
      const container = require('@mathssyfy/markdown-it-container')

      // L'ordre est important !
      // TODO: Ajouter CSS pour container
      // TODO: Ajouter slugify pour toc et anchor
      // TODO: Ajouter props
      // TODO: factor code
      // TODO: Unit Test :((( !!!

      md.use(prism)
      md.use(anchor)
      md.use(toc)
      md.use(emoji)
      md.use(container)
      md.use(katex)
      var result = md.render(this.source)
      return result
    }

  }
}
</script>
