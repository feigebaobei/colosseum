<template>
  <div class="basic">
    <p>v-model={{value}}</p>
    <first v-model="value"></first>
  </div>
</template>

<script>
import first from './first.vue'
export default {
  props: [''],
  data () {
    return {
      value: 0
    }
  },
  computed: {
  },
  components: {
    first
  },
  methods: {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
</style>
