<template>
  <div class="first">
    first
    <h2>{{msg}}</h2>
    <input type="text" v-model="msg">
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {
      msg: 'hello'
    }
  },
  computed: {
  },
  components: {
  },
  methods: {},
  created () {},
  mounted () {},
  beforeRouteLeave (to, from, next) {
    if (to.path === '/keepAlive') {
      from.meta.keepAlive = true
    }
    next()
  }
}
</script>

<style lang="sass" scoped>
.first
</style>
