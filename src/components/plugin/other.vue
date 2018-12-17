<template>
  <div class="other">
    other
  </div>
</template>

<script>
// 为了不报警告就把它注释了。若需要使用vconsole请放开注释。
// var VConsole = require('vConsole')
// var vConsole = new VConsole()
// 为了不报警告就把它注释了。若需要使用vconsole请放开注释。
export default {
  props: [''],
  data () {
    return {
    }
  },
  computed: {
  },
  components: {
  },
  methods: {},
  created () {},
  mounted () {
    // let v = new VConsole()
    // vConsole.setOption('maxLogNumber', 5000)
    console.log('other')
  }
}
</script>

<style lang="scss" scoped>
.other {}
</style>
