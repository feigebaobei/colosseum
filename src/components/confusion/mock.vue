<template>
  <div class="mock">
    <button id="getData" @click="getData">get mock data</button>
    <button id="getDataAge" @click="getDataAge">get mock data age</button>
    <hr>
    <div>{{dataName}}</div>
    <div>{{dataSong}}</div>
    <div>{{dataAge}}</div>
  </div>
</template>

<script>
import api from '../../lib/api.js'
import Mock from 'mockjs'
export default {
  props: {},
  data () {
    return {
      dataName: 'dataName',
      dataSong: Mock.mock({
        bool: Mock.Random.boolean
      }),
      dataAge: 'dataAge'
    }
  },
  computed: {
  },
  components: {
  },
  methods: {
    getData () {
      api.mockData('/data/name').then(res => {
        console.log(res)
        this.dataName = res
      })
    },
    getDataAge () {
      api.mockDataAge('/data/age').then(res => {
        console.log(res)
        this.dataAge = res
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
