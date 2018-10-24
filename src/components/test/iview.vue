<template>
  <div class="basic">
    <p>v-model={{value}}</p>
    <first v-model="value"></first>
    <hr>
    <button @click="openConf">open confirm</button>
    <confirm v-model="confirmShow" @onCancel="cancel" @onOk="ok">
      <p>info info info info info info</p>
    </confirm>
    <hr>
  </div>
</template>

<script>
import first from './first.vue'
import confirm from '@/components/common/confirm.vue'
export default {
  props: [''],
  data () {
    return {
      value: 0,
      confirmShow: false
    }
  },
  computed: {
  },
  components: {
    first,
    confirm
  },
  methods: {
    // open confirm
    openConf: function () {
      //
      this.confirmShow = true
    },
    //
    cancel: function () {
      console.log('cancel')
    },
    ok: function () {
      console.log('ok')
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
</style>
