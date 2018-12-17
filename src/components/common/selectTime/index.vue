<template>
  <div class="selectTime">
    <transition name="fade">
      <div class="selectTimeBg" v-if="value" @click="close" ref="selectTimeBg"></div>
    </transition>
    <transition name="fade">
      <div class="selectTimeContBox" v-if="value">
        <!-- header -->
        <header class="stcHeader">
          <span>取消</span>
          <div class="headerTitleBox">
            <div class="headerTitle" v-html="title"></div>
            <div class="headerSubTitle" v-if="subTitle !== ''" v-html="subTitle"></div>
          </div>
          <span>确定</span>
        </header>
        <!-- body -->
        <section class="stcBody">
          <picker :data="time" :columns=2 v-model="result" @on-change="change"></picker>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
import { Picker } from 'vux'
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'ss'
    },
    subTitle: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      time: [
        {
          name: '10月21日 昨天',
          value: '10/21'
        },
        {
          name: '10月22日 今天',
          value: '10/22'
        },
        {
          name: '10月23日 明天',
          value: '10/23'
        },
        {
          name: '7点',
          value: '7',
          parent: '10/22'
        },
        {
          name: '8点',
          value: '8',
          parent: '10/22'
        },
        {
          name: '9点',
          value: '9',
          parent: '10/22'
        },
        {
          name: '10点',
          value: '10',
          parent: '10/22'
        },
        {
          name: '11点',
          value: '11',
          parent: '10/22'
        },
        {
          name: '12点',
          value: '12',
          parent: '10/22'
        },
        {
          name: '9点',
          value: '9',
          parent: '10/23'
        },
        {
          name: '10点',
          value: '10',
          parent: '10/23'
        },
        {
          name: '11点',
          value: '11',
          parent: '10/23'
        },
        {
          name: '12点',
          value: '12',
          parent: '10/21'
        }
      ],
      result: []
    }
  },
  computed: {
  },
  components: {
    Picker
  },
  methods: {
    close () {
      this.$emit('input', false)
    },
    change (value) {
      console.log(value)
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
.selectTime {
  .selectTimeBg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .4);
  }
  .selectTimeContBox {
    position: fixed;
    // top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 288px;
    // max-height: 75%;
    display: flex;
    flex-direction: column;
    .stcHeader {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      background-color: #fff;
      align-items: center;
      border-top-left-radius: 24px;
      border-top-right-radius: 24px;
      overflow: hidden;
      .headerTitleBox {
        text-align: center;
        .headerTitle {
          color: #4a4a4a;
          font-size: 36px;
          line-height: 50px;
          font-weight: 600;
        }
        .headerSubTitle {
          color: #4a4a4a;
          font-size: 24px;
          line-height: 33px;
          font-weight: 400;
        }
      }
    }
    .stcBody {
      width: 100%;
      height: 238px;
      background-color: #fff;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
