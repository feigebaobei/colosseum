<template>
  <div class="refDataTransfer">
    <p>{{data}}</p>
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data () {
    return {
      name: 'old name'
    }
  },
  computed: {
  },
  components: {},
  methods: {
    getData: function () {
      return this.data
    },
    getDataOther: function () {
      return this.data
    },
    setDataOther: function (item) {
      this.name = item
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
</style>
