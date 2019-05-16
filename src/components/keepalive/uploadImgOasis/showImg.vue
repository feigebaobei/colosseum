<template>
  <div class="showImg" :class="[{'deletable': deletable}]">
    <i class="weui-loading weui-icon_toast loadingPosition" v-if="status === 'loading'"></i>
    <img :src="imgSrc" alt="img" class="img" v-else @click="sel">
    <i class="iconfont icon-shanchu spanBlue del" v-if="deletable" @click="del"></i>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      require: true
    },
    status: {
      type: String,
      default: 'loaded'
    },
    deletable: {
      type: Boolean,
      default: false
    },
    eventTypeDel: {
      type: String,
      default: ''
    },
    eventTypeSel: {
      type: String,
      default: ''
    },
    data: {
      default: '',
      require: false
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
    sel () {
      if (this.eventTypeSel) {
        this.$emit(this.eventTypeSel, this.data)
      }
    },
    del () {
      if (this.eventTypeDel) {
        // let obj = Object.create(null)
        // obj.src = this.imgSrc
        this.$emit(this.eventTypeDel, this.data)
      }
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="less" scoped>
.showImg {
  width: 1.52rem;
  height: 1.52rem;
  display: inline-block;
  position: relative;
  font-size: .28rem;
  .loadingPosition {
    position: absolute;
    right: .57rem;
  }
  .img {
    width: 1.52rem;
    height: 1.52rem;
    border-radius: .08rem;
  }
}
.deletable {
  width: 1.6rem;
  height: 1.6rem;
  .img {
    width: 1.52rem;
    height: 1.52rem;
    margin: .08rem .08rem 0 0;
  }
  .del {
    position: absolute;
    top: 0;
    right: 0;
    color: #D8001A;
    font-size: .36rem;
    line-height: .36rem;
    border-radius: 50%;
    box-shadow: 0 .02rem 0.04rem 0 rgba(0, 0, 0, .5);
    background-color: #fff;
    // top: -.08rem;
    // right: -.08rem;
  }
}
</style>
