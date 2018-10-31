<template>
  <div class="index">
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

<style lang="less" scoped>
.index {}
</style>
