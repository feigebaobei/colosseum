<template>
  <div class="watch">
    <button @click="modify">modify</button>
    <p>{{first}}</p>
  </div>
</template>

<script>
export default {
  props: [''],
  data () {
    return {
      first: 'string'
    }
  },
  watch: {
    first: function (newValue, oldValue) {
      console.log(newValue)
      console.log(oldValue)
    }
  },
  computed: {
  },
  components: {},
  methods: {
    modify: function () {
      this.first += 'modify'
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
</style>
