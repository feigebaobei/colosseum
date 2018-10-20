<template>
  <div class="basic">
    <button @click="getBus">bus</button>
  </div>
</template>

<script>
import Bus from '../common/bus.js'
export default {
  props: [''],
  data () {
    return {}
  },
  computed: {
  },
  components: {},
  methods: {
    getBus: function () {
      Bus.$on('msg', (e) => {
        console.log(e)
      })
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
</style>
