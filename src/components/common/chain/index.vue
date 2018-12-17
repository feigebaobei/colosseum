<template>
  <div class="chain">
    chain
    <!-- 渲染出视图 -->
    @touchstart="touchStartHandler"
    @mousedown="touchStartHandler"
    @touchmove="touchMoveHandler"
    @mousemove="touchMoveHandler"
    @touchend="touchEndHandler"
    @mouseup="touchEndHandler"
    |-----------|
    |---value---|
    |---value---|
    |---value---|
    |---value---|
    |---value---|
    |---value---|
    |-----------|
  </div>
</template>

<script>
export default {
  props: {
    chain: {
      type: Array,
      default () {
        return []
      }
    },
    desire: {
      type: Number,
      default: 60
    }
  },
  data () {
    return {
      // chain: [], // 数据链条。
      value: '', // 当前值。默认为chain里的第一个
      moveStart: null, // 开始滑动时的高度偏移。
      moveEnd: null, // 滑动结束时的高度偏移。
      timeStampStart: null, // 开始滑动时的时间戳
      timeStampEnd: null, // 滑动结束时的时间戳
      velocity: 0, // 滑动的速度

      itemHeight: '36px', // 每个chain中的项的高度
    }
  },
  computed: {
  },
  components: {
  },
  methods: {
    init () {
      // 计算value
      // moveStart
    },
    touchStartHandler () {
      // 是否正在滑动.
      // set timeStampStart
    },
    touchMoveHandler () {
      // set timsStampEnd
      // 根据 event.target.pageY / touches[0].pageY set moveEnd
      // compute velocity
    },
    touchEndHandler () {
      // by velocity set moveEnd
    },
    publishResult (height) {
      // 根据height set moveEnd
    },
    valueResult (height) {
      // set value
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
.chain {}
</style>
