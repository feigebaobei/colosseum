<template>
  <div class="second">
    second
    <p>{{message}}</p>
    <button @click="modify">modify</button>
  </div>
</template>

<script>
// import store from './store.js'
export default {
  props: [''],
  data () {
    return {
      message: this.$parent.store,
      number: 0
    }
  },
  computed: {
  },
  components: {
  },
  methods: {
    modify () {
      // this.$parent.store.state.msg = 'ads' + this.number++
      // this.$parent.store.
      this.message.setMessageAction('ads' + this.number++)
    }
  },
  created () {},
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.second {}
</style>
