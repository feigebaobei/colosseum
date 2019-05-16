<template>
  <div class="uploadImg">
    <div class="contBox" v-for="(item, index) in imgArr" :key="index">
      <show-img :status="item.status" :imgSrc="item.src" :deletable="true" :data="index" :eventTypeDel="'delImg'" @delImg="delImg"></show-img>
    </div>
    <div class="inputBox contBox" @click="trigger" v-if="imgArr.length < maxImgCount" :style="[compBg]">
      <!-- 因为ios/ad处理capture的兼容性问题。
      建议不要把这个组件做为npm包里的公共组件。
      请在每个项目中处理这个组件 -->
      <input v-if="isIOS" ref="input" class="input" multiple="" :type="type" :accept="accept" @change="changeE">
      <input v-else ref="input" class="input" multiple="" :type="type" :capture="capture" :accept="accept" @change="changeE">
    </div>
  </div>
</template>

<script>
// import { icon2 } from '@/data/picMap.js'
import showImg from './showImg.vue'
// import axiosbq from '@//lib/api.oasis.boqing.js'
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    maxImgCount: {
      type: Number,
      default: 8
    },
    capture: { // input 的捕获方式
      type: String,
      default: ''
    },
    accept: { // 直接打开系统文件目录
      type: String,
      default: ''
    },
    targetWidthMax: {
      type: Number, // util: px
      default: 1080
    },
    targetHeightMax: {
      type: Number,
      default: 1920
    },
    // quality: {
    //   type: [Number, Object], // Object只能是null
    //   default: null,
    //   validator (value) {
    //     console.log(typeOf(value))
    //     if (typeOf(value) === 'object') {
    //       return value === null
    //     }
    //   }
    // },
    threshold: { // 设置每个图片的大小
      type: Number,
      // default: 1 * 1024 * 1024
      default: 300 * 1024
      // validator (value) {
      //   return value > 0 || value <= 1
      // }
    },
    eventTypeLoading: {
      type: String,
      default: ''
    },
    eventTypeLoaded: {
      type: String,
      default: ''
    },
    eventTypeLoadSuccess: {
      type: String,
      default: ''
    },
    eventTypeLoadError: {
      type: String,
      default: ''
    },
    eventTypeLoadCancel: {
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
  name: 'uploadImg',
  data () {
    return {
      imgArr: [
        // {
        //   src: '',
        //   status: 'loading', // 'loading'/'loaded'
        //   init: true, // true/false
        // }
      ],
      // show: {
      //   inputBox: true
      // },
      resultUrl: [] // 存放oos上的图片的url
    }
  },
  computed: {
    compBg () {
      let obj = Object.create(null)
      // if (this.imgArr.length) {
      //   obj.backgroundImage = `url(${icon['add'].x3})`
      //   obj.backgroundSize = '.36rem .36rem'
      // } else {
      //   obj.backgroundImage = `url(${icon['camera'].x3})`
      //   obj.backgroundSize = '.72rem .58rem'
      // }
      obj.backgroundPosition = 'center center'
      obj.backgroundRepeat = 'no-repeat'
      return obj
    },
    compCapture () {

    }
  },
  components: {
    showImg
  },
  methods: {
    isIOS () {
      let ua = navigator.userAgent
      let isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
      return isiOS
    },
    trigger () {
      // ie
      if (document.createEventObject) {
        let e = document.createEventObject()
        this.$refs.input.fireEvent('onclick', e)
      } else {
        let e = document.createEvent('MouseEvents')
        e.initEvent('click', false, true)
        this.$refs.input.dispatchEvent(e)
      }
      // console.log('click')
    },
    // swichShow () {
    //   this.show.inputBox = !(this.show.inputBox)
    // },
    changeE () {
      // console.log('changeE')
      let files = this.$refs.input.files
      // for (let i = 0, iLen = files.length; i < iLen; i++) {
      //   if (this.imgArr.length < this.maxImgCount) {
      //     this.imgArr.push({
      //       src: '',
      //       status: 'loading',
      //       init: true
      //     })
      //   }
      // }
      let basis = this.imgArr.length
      // 上传这次选中的图片
      for (let i = 0; i < files.length; i++) {
        if (this.imgArr.length < this.maxImgCount) {
          this.imgArr.push({
            src: '',
            status: 'loading',
            init: true
          })
          this.resultUrl.push(0) // 表示这里会有一个图片的链接，但是还没写入。
          this.uploadImg(files[i], i + basis)
          // console.log(this.resultUrl)
        } else {
          this.$vux.toast.text('最多上传8张图片')
        }
      }
    },
    delImg (data) {
      this.imgArr.splice(data, 1)
      this.resultUrl.splice(data, 1)
      this.$refs.input.value = ''
      let i = 0;
      let iLen = this.resultUrl.length
      let isUploadFinish = this.resultUrl.includes(0)
      if (!isUploadFinish) {
        if (this.eventTypeLoadCancel) {
          this.$emit(this.eventTypeLoadCancel, this.data)
        }
      }
    },
    // 去重图片
    unique () {
    },
    isExist (item) {
      let bool = false
      for (let i = 0; i < this.imgArr.length; i++) {
        if (this.imgArr[i].src === item) {
          return true
        }
      }
      return bool
    },
    uploadImg (file, index) {
      // console.log(index, file)
      // file
      // reader
      // index 图片的序号
      // this.imgArr.push({
      //   src: reader.result,
      //   status: 'loading'
      // })
      // 开始上传图片
      if (this.eventTypeLoading) {
        this.$emit(this.eventTypeLoading, this.data)
      }
      // return 
      // let formData = new FormData()
      // return
      this.opFile(file).then((value) => {
        let formData = new FormData()
        formData.append('file', value)
        formData.append('path', 'crm')
        console.log('上传成功')
        // axiosbq.uploadImg(formData).then(response => {
        //   // console.log('uploadImg this', this)
        //   // console.log('uploadImg index', index)
        //   this.imgArr[index].status = 'loaded'
        //   // this.imgArr[index].src = this.result
        //   let reader = new FileReader()
        //   reader.readAsDataURL(file)
        //   let that = this
        //   reader.onload = function () {
        //     // console.log(`no.${index} 图片上传成功后本地加载成功`)
        //     that.imgArr[index].src = this.result
        //     that = null
        //   }
        //   this.resultUrl[index] = response.data.data
        //   // console.log('this.resultUrl', this.resultUrl)
        //   if (!this.resultUrl.includes(0)) {
        //     if (this.eventTypeLoadSuccess) {
        //       this.$emit(this.eventTypeLoadSuccess, this.data)
        //     }
        //   }
        // }).catch(err => {
        //   console.log(err, '上传失败')
        //   // console.log('this.resultUrl', this.resultUrl)
        //   if (this.eventTypeLoadError) {
        //     this.$emit(this.eventTypeLoadError, this.data)
        //   }
        // })
      }).catch((err) => {
        console.log(err, '压缩失败')
      })
    },
    opFile (file) {
      // console.log(file)
      return new Promise((resolve, reject) => {
        let reader = new FileReader(),
          img = new Image()
        reader.readAsDataURL(file)
        reader.onload = (e) => {
          img.src = e.target.result
        }
        img.setAttribute('crossOrigin', 'anonymous')
        img.onload = () => {
          if (file.size < this.threshold) {
            resolve(file)
          } else {
            let canvas = document.createElement('canvas'),
              context = canvas.getContext('2d'),
              quality = this.threshold / file.size,
              originWidth = img.width,
              originHeight = img.height,
              canvasWidth = Math.min(originWidth, this.targetWidthMax),
              canvasHeight = Math.min(originHeight, this.targetHeightMax)
            canvas.width = canvasWidth
            canvas.height = canvasHeight
            context.clearRect(0, 0, canvasWidth, canvasHeight)
            context.drawImage(img, 0, 0, canvasWidth, canvasHeight)
            // console.log('quality', quality)
            resolve(this.base64ToFile(canvas.toDataURL(file.type, quality), file.name, file.type))
          }
        }
      })
    },
    base64ToFile (base64, name, mimeType) {
      // console.log(base64)
      // console.log(name)
      // console.log(mimeType)
      base64 = base64.split(',')[1]
      base64 = window.atob(base64)
      let ia = new Uint8Array(base64.length)
      for (var i = 0; i < base64.length; i++) {
        ia[i] = base64.charCodeAt(i)
      }
      var blob = new Blob([ia], {type: mimeType})
      var newFile = new File([blob], name)
      return newFile
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="less" scoped>
.uploadImg {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 -.1rem;
  .contBox {
    flex-basis: 20%;
    display: inline-block;
    font-size: 0;
    margin: 0 .09rem .16rem .09rem;
    border-radius: .16rem;
  }
  .inputBox {
    width: 1.52rem;
    height: 1.52rem;
    display: inline-block;
    border: .01rem dashed #9b9b9b;
    .input {
      display: none;
      // width: 0;
      // height: 0;
    }
  }
  .add {
    // background-image: 'url(' + `${icon.add.x3}` + ')'
    // background-image: 'url(' + $img + ')'
  }
}
</style>
