<template>
  <div class="contbox">
    <div class="cont" v-for="(item, index) in data" :key="index">
      <div class="box" v-for="(subItem, subIndex) in item" :key="subIndex">{{subItem}}</div>
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
  mounted () {}
}
</script>

<style lang="scss" scoped>
.contbox {
  width: 100%;
  height: 100%;
  display: flex;
  .cont {
    flex-basis: 100px;
    overflow: scroll;
    display: flex;
    flex-direction: column;
  }
}
</style>
