<template>
  <div class="second">
    second
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {
      msg: 'stat'
    }
  },
  computed: {
  },
  components: {
  },
  methods: {},
  created () {},
  mounted () {},
  beforeRouteLeave(to, from, next) {
    if (to.path === '/keepAlive/first') {
      to.meta.keepAlive = false
    }
    next()
  }
}
</script>

<style lang="sass" scoped>
.second
</style>
