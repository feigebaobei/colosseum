<template>
  <div class="confirm" v-if="value">
    <!-- <div class="confirmBg" @click="close" ref="confirm"></div> -->
    <div class="confirmContBox" @click="close">
      <div class="confirmCont">
        <div class="confirmH"></div>
        <div class="confirmB">
          <slot></slot>
        </div>
        <div class="confirmF">
          <div class="confirmCancel" @click="cancel">cancel</div>
          <div class="confirmOk" @click="ok">ok</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    onCancel: {
      type: String
    },
    onOk: {
      type: String
    },
    onClose: {
      type: String
    },
    onOpen: {
      type: String
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
    //
    close: function () {
      this.$emit('input', false)
    },
    //
    cancel: function () {
      this.$emit('onCancel')
      this.close()
    },
    //
    ok: function () {
      this.$emit('onOk')
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
  // .confirmBg {
  //   position: fixed;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   left: 0;
  //   background-color: rgba(0, 0, 0, .4);
  //   width: 100vw;
  //   height: 100vh;
  // }
  .confirmContBox {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0, 0, 0, .4);
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
}
</style>
