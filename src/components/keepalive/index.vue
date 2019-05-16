<template>
  <div class="index">
    <router-link to="/keepAlive/first">keepAlive/first</router-link>
    <br>
    <router-link to="/keepAlive/second">keepAlive/second</router-link>
    <div class="content">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </div>
</template>

<script>
import first from './first.vue'
import second from './second.vue'
export default {
  props: {},
  data () {
    return {
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
  mounted () {},
  beforeRouteLeave(to, from, next) {
    if (to.path === '/keepAlive/first') {
      to.meta.keepAlive = true
    }
    next()
  }
}
</script>

<style lang="sass" scoped>
.index
</style>
