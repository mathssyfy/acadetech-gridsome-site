<template>
    <div>
      <textarea
        value={this.text}
        v-on:change={this.onChange} />
      <div id='preview'>
        { remark().use(vueRenderer).processSync(this.text).contents }
      </div>
    </div>
</template>

<script>
var Vue = require('vue'),
    remark = require('remark'),
    vueRenderer = require('remark-vue');
export default {
  data: function () {
    return {
      text: '# hello world'
    }
  },
  onChange(e) {
    this.text = e.target.value;
  },  
}
</script>

