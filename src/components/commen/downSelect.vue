<template>
  <div class="downSelect">
    <p>downSelect</p>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  // props: [''],
  props: {
    msg: {
      type: String,
      default: function () {
        // return '默认字段'
        return '23'
      }
    }
  },
  data () {
    return {}
  },
  computed: {
  },
  components: {},
  methods: {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
</style>
