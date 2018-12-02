<template>
  <div class="confirm">
  <transition name="fade">
    <div class="confirmBg" v-if="value" @click="close" ref="confirm"></div>
  </transition>
  <transition name="fade">
    <div class="confirmContBox" v-if="value" @click="close">
      <div class="confirmCont">
        <div class="confirmH"></div>
        <div class="confirmB">
          <!-- 使用内容插槽可以使用确认框内容更多变 -->
          <slot></slot>
          <!-- <p v-html="confirmCont"></p> -->
        </div>
        <div class="confirmF">
          <div class="confirmCancel" v-html="cancelText" @click="cancel">cancel</div>
          <div class="confirmOk" v-html="okText" @click="ok">ok</div>
        </div>
      </div>
    </div>
  </transition>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    confirmCont: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: 'cancel'
    },
    okText: {
      type: String,
      default: 'ok'
    },
    eventTypeCancel: {
      type: String,
      default: ''
    },
    eventTypeOk: {
      type: String,
      default: ''
    },
    eventTypeOpen: {
      type: String,
      default: ''
    },
    eventTypeClose: {
      type: String,
      default: ''
    },
    data: {
      default () {
        return {}
      },
      require: false
    }
  },
  data () {
    return {
    }
  },
  watch: {
    value: function (newValue, oldValue) {
      if (newValue) {
        this.open()
      } else {
        this.close()
      }
    }
  },
  computed: {
  },
  components: {
  },
  methods: {
    //
    close: function () {
      this.$emit('input', false)
      this.$emit(this.eventTypeClose, this.data)
    },
    //
    open: function () {
      // this.$emit('input', false)
      if (this.eventTypeOpen) {
        this.$emit(this.eventTypeOpen, this.data)
      }
    },
    //
    cancel: function () {
      if (this.eventTypeCancel) {
        this.$emit(this.eventTypeCancel, this.data)
      }
      this.close()
    },
    //
    ok: function () {
      if (this.eventTypeOk) {
        this.$emit(this.eventTypeOk, this.data)
      }
      this.close()
    },
    //
    init: function () {
      let body = document.getElementsByTagName('body')[0]
      console.log(body)
      console.log(this)
      console.log(this.$refs)
      console.log(this.$refs.abc)
      // document.body.appendChild(this.$refs.confirm)
      // document.body.appendChild(this.$refs.abc)
    }
  },
  created () {
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.confirm {
  .confirmBg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .4);
    width: 100vw;
    height: 100vh;
  }
  .confirmContBox {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // background-color: rgba(0, 0, 0, .4);
    .confirmCont {
      width: 450px;
      border-radius: 20px;
      margin-left: auto;
      margin-right: auto;
      background-color: #fff;
      .confirmH {}
      .confirmB {
        text-align: center;
        border: 0;
        border-bottom: 1px solid #f2f5f9;
        padding: 16px;
      }
      .confirmF {
        text-align: center;
        display: flex;
        padding: 8px 16px;
        .confirmCancel {
          box-sizing: border-box;
          flex-basis: 50%;
        }
        .confirmOk {
          box-sizing: border-box;
          flex-basis: 50%;
        }
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .4s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}
</style>
