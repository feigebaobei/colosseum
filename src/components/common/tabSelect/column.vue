<template>
  <div class="column">
    <span v-for="(item, index) in showDdata" :key="index" v-html="item.text" @click="switchItem(item)"></span>
  </div>
</template>

<script>
export default {
  props: {
    showDdata: {
      type: Array,
      default () {
        return []
      }
    },
    eventType: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  components: {
  },
  methods: {
    switchItem (item) {
      if (this.eventType) {
        this.$emit(this.eventType, item)
      }
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="less" scoped>
.column {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
}
</style>
