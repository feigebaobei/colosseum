<template>
  <div class="vux">
    vux
    <icon type="success"></icon>
    <group>
      <cell title="title" value="value"></cell>
    </group>
    <x-switch title="开关" v-model="show"></x-switch>
    <popup v-model="show" position="right">
      <div style="width:500px;">
        haha
      </div>
    </popup>
  </div>
</template>

<script>
import {Icon, Group, Cell, Popup, XSwitch} from 'vux'
export default {
  props: [''],
  data () {
    return {
      show: false
    }
  },
  computed: {
  },
  components: {
    Icon,
    group: Group,
    Cell,
    Popup,
    XSwitch
  },
  methods: {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
</style>
