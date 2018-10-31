<template>
  <div class="tab" :class="[{vertical: fullHeight}]">
    <div class="barBox" ref="barBox" :class="[]">
      <div class="bar" :class="[{isOpen: openTabValue.indexOf(item.value) > -1}]" v-for="(item, index) in tabs" :key="index" @click="switchTab(item)">
        <span class="text" v-html="item.text"></span>
        <img :src="icon" alt="" class="icon" v-if="isIcon">
      </div>
    </div>
    <div class="bottom" v-if="openTabValue.length > 0"></div>
    <div class="cont">
      <slot v-for="item in tabs" :name="item.value" v-if="openTabValue.indexOf(item.value) > -1"></slot>
    </div>
  </div>
</template>

<script>
import icon from '@/assets/icons/Triangle@3x.png'
export default {
  props: {
    fullHeight: {
      type: Boolean,
      default: true
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    mulOpen: {
      type: Boolean,
      default: false
    },
    tabs: {
      type: Array,
      default: function () {
        return [
          {
            text: 'first text',
            value: 'first'
          },
          {
            text: 'second text',
            value: 'second'
          },
          {
            text: 'three text',
            value: 'three'
          }
        ]
      }
    },
    defaultTabValue: {
      type: Array,
      default () {
        return []
      }
    },
    isIcon: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      icon: icon,
      openTabValue: []
    }
  },
  computed: {
  },
  components: {
  },
  methods: {
    init () {
      this.openTabValue = this.defaultTabValue
    },
    //
    switchTab (item) {
      if (this.mulOpen) {
        // this.openTabValue.indexOf(item.value) > -1 ? this.openTabValue.push(item.value) : ''
        if (this.openTabValue.indexOf(item.value) > -1) {
          this.openTabValue.push(item.value)
        }
      } else {
        this.openTabValue = [item.value]
      }
    }
  },
  created () {
    this.init()
  },
  mounted () {}
}
</script>

<style lang="less" scoped>
.tab {
  display: flex;
  height: 100%;
  .barBox {
    flex-grow: 0;
    flex-shrink: 0;
    background-color: #fff;
    color: #4a4a4a;
    font-size: 0.28rem;
    line-height: 0.4rem;
    font-weight: 600;
    padding: 0.3rem 0.28rem;
    box-sizing: border-box;
    display: flex;
    overflow-x: auto;
    .bar {
      text-align: center;
      margin: 0 0.88rem 0 0;
      display: flex;
      align-items: center;
      &:last-child {
        margin: 0 0 0 0;
      }
      .icon {
        width: 0.12rem;
        height: 0.08rem;
        margin: 0 0 0 0.16rem;
        img {
          width: 0.12rem;
          height: 0.08rem;
        }
      }
    }
    .isOpen {
      .icon {
        transform: rotate(180deg);
      }
    }
  }
  .bottom {
    flex-grow: 0;
    flex-shrink: 0;
    border-bottom: 1px solid #f2f5f8;
  }
  .cont {}
}
.vertical {
  display: flex;
  flex-direction: column;
  .cont {
    flex-grow: 1;
    flex-shrink: 1;
    overflow-y: auto;
  }
}
</style>
