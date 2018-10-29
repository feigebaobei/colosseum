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
    <group>
      <datetime v-model="dateValue" :placeholder="'Please'">
      </datetime>
      <datetime v-model="dateValue" :placeholder="'Please select'" :min-year=2000 :max-year=2016 format="YYYY-MM-DD HH:mm" :title="'Years after 2000'"></datetime>
    </group>
  </div>
</template>

<script>
import {Icon, Group, Cell, Popup, XSwitch, Datetime} from 'vux'
export default {
  props: [''],
  data () {
    return {
      show: false,
      dateValue: ''
    }
  },
  computed: {
  },
  components: {
    Icon,
    group: Group,
    Cell,
    Popup,
    XSwitch,
    Datetime
  },
  methods: {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
</style>
