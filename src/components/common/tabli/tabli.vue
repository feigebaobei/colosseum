<!-- 使用方法 start
1. 引入当前组件。
2. 有父组件中传入tabs数组。
  tabs: [
    {
      text: 'String' // 用于有tabbar的文本
      value: 'String' // 用于对应内容
    },
    ...
  ]
3. 在tab-li标签内写上对应的cont.
4. 具体参数说明
  isFull tabbar是否2端对齐
  defaultTabValue 默认当前tabbar的value
  <template>
    <div class="self">
      <tab-li :tabs="tabs" :defaultTabValue="'first'" :isFull="false">
        <p slot="first">one p</p>
        <p slot="second">two p</p>
        <p slot="third">three p</p>
      </tab-li>
    </div>
  </template>
使用方法 end -->

<!-- 功能 start
1. 可打开相应内容div
2. 可关闭相应div
3. tab bar 可接受自定义类
功能 end -->
<template>
  <div class="tabli">
    <div class="barBox" ref="barBox" :class="[{full: isFull}]">
      <!-- <transition name="size">
      </transition> -->
        <div v-for="(item, index) in tabs" :key="index" class="bar" :class="[{activeBarLi: curTabValue === item.value}, customClass]" :style="styleObj" @click="switchTab(item.value)">
          <span v-html="item.text" class="text"></span>
          <span class="point"></span>
        </div>
    </div>
    <slot v-for="item in tabs" :name="item.value" v-if="item.value === curTabValue"></slot>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      require: true
    },
    defaultTabValue: {
      type: String,
      require: false
    },
    isFull: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: ''
    },
    callback: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      curTabValue: null,
      styleObj: {}, // css样式
      customClassBool: false
    }
  },
  computed: {
  },
  components: {},
  methods: {
    switchTab: function (value) {
      if (this.curTabValue === value) {
        this.curTabValue = null
      } else {
        this.curTabValue = value
      }
      this.addCustomClass()
      if (this.callback !== '') {
        this.$emit(this.callback, {value: 'address'})
      }
    },
    addCustomClass () {
      if (this.customClass !== '') {
        this.customClassBool = true
      } else {
        this.customClassBool = false
      }
    }
  },
  created () {
    this.curTabValue = this.defaultTabValue
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
$unit: 7.5;
.tabli {
  .barBox {
    display: flex;
    background-color: #fff;
    .bar {
      flex-basis: auto;
      color: #666;
      font-size: 18px;
      border-radius: 56px;
      border:1px solid #79d;
      box-sizing: border-box;
      margin-right: 24px;
      padding: 0 12px;
      -webkit-user-select:none;
      -moz-user-select:none;
      -ms-user-select:none;
      user-select:none;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
      .text {
        line-height: 32px;
        display: inline-block;
      }
      .point {
        display: none;
      }
    }
    .activeBarLi {
      color: #ff7e00;
      font-size: 22px;
      font-weight: 600;
      .point {
        // display: block;
        // margin: 0 auto;
        // width: 16px;
        // height: 8px;
        // background-color: #ff7e00;
        // border-radius: 4px;
      }
    }
    .size-enter-active,
    .size-active-enter {
      transition: opacity 0.5s;
    }
    .size-enter,
    .size-leave-to {
      // font-size: 18px;
      opacity: 0;
    }
  }
  .full {
    justify-content: space-between;
  }
}
</style>
