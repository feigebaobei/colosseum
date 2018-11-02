<template>
  <div class="velocity">
    <hr>
    <router-link to="/velocity/basic">go to basic</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
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
  mounted () {}
}
</script>

<style lang="scss" scoped>
.velocity {}
</style>
