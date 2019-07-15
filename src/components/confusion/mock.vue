<template>
  <div class="mock">
    <button id="getData" @click="getData">get mock data</button>
    <hr>
    <div>{{dataRes}}</div>
  </div>
</template>

<script>
import api from '../../lib/api.js'
export default {
  props: {},
  data () {
    return {
      dataRes: 'null'
    }
  },
  computed: {
  },
  components: {
  },
  methods: {
    getData () {
      api.mockData('/data/index').then(res => {
        console.log(res)
        this.dataRes = res
      })
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="sass" scoped>
.mock
</style>
