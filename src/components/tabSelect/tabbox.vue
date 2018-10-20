<template>
  <div class="tabbox">
    <div class="tab" v-for="(item, index) in data" :key="index">
      <span class="text" v-html="item.text" @click="select"></span>
      <span class="icon"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data () {
    return {}
  },
  computed: {
  },
  components: {},
  methods: {
    select: function () {
      console.log(3)
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
// #content {
//   article {
//     h1 { color: #333 }
//     p { margin-bottom: 1.4em }
//   }
//   aside { background-color: #EEE }
// }
// .tabbox{ border: 1px solid #482; }
.tabbox {
  width: 100%;
  height: 100%;
  display: flex;
  .tab {
    flex-basis: 100px;
    border: 1px solid #233;
  }
}
</style>
