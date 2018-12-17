<template>
  <div class="common">
    <h2>common</h2>
    <button @click="showTime">select time</button>
    <select-time v-model="dataSelectTime.show" :title="dataSelectTime.title" :subTitle="dataSelectTime.subTitle"></select-time>
  </div>
</template>

<script>
import selectTime from './selectTime/index.vue'
export default {
  props: [''],
  data () {
    return {
      dataSelectTime: {
        show: false,
        title: 'title',
        subTitle: 'subTitle'
      }
    }
  },
  computed: {
  },
  components: {
    selectTime
  },
  methods: {
    showTime () {
      this.dataSelectTime.show = true
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
.common {}
</style>
