<template>
  <div class="first">
    first
    <p>{{message}}</p>
  </div>
</template>

<script>
// import store from './store.js'
export default {
  props: [''],
  data () {
    return {
      message: this.$root.$store
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
.first {}
</style>
