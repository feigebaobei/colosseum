<template>
  <div class="vux">
    vux
    <icon type="success"></icon>
    <group>
      <cell title="title" value="value"></cell>
    </group>
  </div>
</template>

<script>
import {Icon, Group, Cell} from 'vux'
export default {
  props: [''],
  data () {
    return {}
  },
  computed: {
  },
  components: {
    Icon,
    group: Group,
    Cell
  },
  methods: {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
</style>
