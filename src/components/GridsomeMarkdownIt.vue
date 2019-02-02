<template>
<div>
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.css" integrity="sha384-xNwWFq3SIvM4dq/1RUyWumk8nj/0KFg4TOnNcfzUU4X2gNn3WoRML69gO7waf3xh" crossorigin="anonymous"> -->
 
 <div v-html="body"></div>
</div>
 
</template>

<script>
import 'prismjs/themes/prism-dark.css'
import 'katex/dist/katex.css'
export default {
   props: {
       source: ""
   },
   computed:{
      body() {
          
          
          const md = require('markdown-it')();
          const prism = require('markdown-it-prism');
          const katex =require('markdown-it-katex-newcommand')
          md.use(prism)
          md.use(katex)
var result = md.render(this.source);
return result
}

  }
}
</script>

