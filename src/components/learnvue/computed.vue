<template>
  <div class="computed">
    <label>first</label>
    <input type="text" v-model="first">
    <label>second</label>
    <input type="text" v-model="second">
    <label>full</label>
    <input type="text" v-model="full">
    <p>{{first}}</p>
    <p>{{second}}</p>
    <p>{{full}}</p>
    <button @click="modify">modify full</button>
  </div>
</template>

<script>
export default {
  props: [''],
  data () {
    return {
      first: 'first',
      second: 'second'
    }
  },
  computed: {
    full: {
      get: function () {
        return this.first + ' ' + this.second
      },
      set: function (newValue) {
        var names = newValue.split(' ')
        this.first = names[0]
        this.second = names[names.length - 1]
      }
      // get: () => this.first + ' ' + this.second,
      // set: (newValue) => {
      //   console.log(newValue)
      //   let names = newValue.split(' ')
      //   this.first = names[0]
      //   this.second = names[1]
      // }
    }
  },
  components: {},
  methods: {
    modify: function () {
      this.full = 'a b'
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
</style>
