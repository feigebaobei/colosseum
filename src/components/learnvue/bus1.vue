<template>
  <div class="basic">
    <p>{{bar}}</p>
  </div>
</template>

<script>
import Bus from '../commen/bus.js'
export default {
  props: [''],
  data () {
    return {}
  },
  inject: ['bar'],
  computed: {
  },
  components: {},
  methods: {
    bus () {
      Bus.$emit('msg', 'message')
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
</style>
