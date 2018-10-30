<template>
  <div class="test">
    test
    <p v-if="show">{{obj.msg}}</p>
    <button @click="addMsg">add msg</button>
  </div>
</template>

<script>
export default {
  props: [''],
  data () {
    return {
      show: true,
      obj: {}
    }
  },
  computed: {
  },
  components: {
  },
  methods: {
    addMsg () {
      this.show = !this.show
      this.$set(this.obj, 'msg', 'string')
    }
  },
  created () {
    // console.log(this.$el)
  },
  mounted () {
    console.log(this.$el.first)
    console.log(this.$el)
  }
}
</script>

<style lang="scss" scoped>
.test {
  // position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
