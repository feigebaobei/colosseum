<template>
  <div class="downSelect">
    <!-- downSelect -->
    <div class="dsHeader">
      <p class="dsFirst dsItem" @click="select(current, 0)" ref="first">
        <span v-html="current.text" class="text"></span>
        <span class="icon">></span>
      </p>
      <div class="dsRemainingBox">
        <p v-if="isSpread" v-for="(item, index) in remaining" :key="index" class="dsRemaining dsItem" @click="select(item, index + 1)">
          <span v-html="item.text" class="text"></span>
          <!-- <span class="icon"></span> -->
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   data: {
  //     default:
  //   }
  // },
  data () {
    return {
      data: [
        {text: 'first', value: '0'},
        {text: 'second', value: '1'},
        {text: 'three', value: '2'},
        {text: 'four', value: '3'}
      ],
      box: null,
      current: {text: '', value: null},
      remaining: [],
      // result: this.current,
      isSpread: false
    }
  },
  computed: {
    // result: {
    //   get: function () {

    //   },
    //   set: function () {

    //   }
    // }
  },
  components: {},
  methods: {
    // 展开
    spread: function () {
      let first = this.$refs.first
      first.classList.add('dsFocus')
      this.isSpread = true
    },
    // 合起来
    shrink: function () {
      this.isSpread = false
    },
    // 选择
    select: function (item, index) {
      if (this.isSpread) {
        this.current = this.box.splice(index, 1)[0]
        this.box = [this.current].concat(this.box)
        this.remaining = this.box.slice(1, this.box.length)
        this.shrink()
      } else {
        this.spread()
      }
    }
  },
  created () {
    this.box = this.data
    this.current = this.box[0]
    this.remaining = this.box.slice(1, this.box.length)
  },
  mounted () {}
}
</script>

<!--
<style>
 -->
<style lang="scss" scoped>
.downSelect {
  width: 100%;
  position: relative;
  .dsItem {
    height: 32px;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 0 12px;
    &:hover {
      background: #e2e2e2;
    }
  }
  .dsFirst {
    background: #efefef;
    .text {}
    .icon {
      transform: rotate(90deg)
    }
  }
  .dsFocus {
    border-bottom: 2px solid #e4e4e4;
  }
  .dsRemainingBox {
    position: absolute;
    width: 100%;
    .dsItem {
      &:hover {
        background: #e2e2e2;
      }
    }
    .dsRemaining {
      background: #efefef;
    }
  }
}
</style>
