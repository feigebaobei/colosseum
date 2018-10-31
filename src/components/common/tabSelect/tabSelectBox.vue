<template>
  <div class="tabSelectBox">
    <tab-select></tab-select>
  </div>
</template>

<script>
import tabSelect from './tabSelect.vue'
export default {
  props: [''],
  data () {
    return {
    }
  },
  computed: {
  },
  components: {
    tabSelect
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
.tabSelectBox {}
</style>
