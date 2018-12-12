<template>
  <div class="other">
    other
  </div>
</template>

<script>
// import vConsole from './asset.js'
// import VConsole from 'vConsole'
var VConsole = require('vConsole')
var vConsole = new VConsole()
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
