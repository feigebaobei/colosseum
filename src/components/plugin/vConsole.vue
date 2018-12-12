<template>
  <div class="vConsole">
    vConsole
  </div>
</template>

<script>
export default {
  props: [''],
  data () {
    return {
    }
  },
  computed: {
  },
  components: {
  },
  methods: {
    init () {
      console.log('str')
    }
  },
  created () {
    this.init()
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.vConsole {}
</style>
