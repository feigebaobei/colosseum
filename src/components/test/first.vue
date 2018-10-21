<template>
  <div class="first">
    <p>value:{{val}}</p>
    <button @click="m">modify</button>
  </div>
</template>

<script>
export default {
  props: ['val'],
  data () {
    return {
      v: this.val
    }
  },
  computed: {
  },
  components: {},
  methods: {
    m: function () {
      this.$emit('input', ++this.v)
      // this.value = !this.value
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
.first {}
</style>
