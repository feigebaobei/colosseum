<template>
  <div class="view">
    <p>view</p>
    <first></first>
    <second></second>
  </div>
</template>

<script>
import first from './first.vue'
import second from './second.vue'
import store from './store.js'
export default {
  props: [''],
  data () {
    return {
      store: store
    }
  },
  computed: {
  },
  components: {
    first,
    second
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
.view {}
</style>
