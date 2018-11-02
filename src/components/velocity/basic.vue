<template>
  <div class="basic">
    <button @click="star">star</button>
    <p class="left" ref="left">left: 200px</p>
    <div class="color" ref="colors"></div>
  </div>
</template>

<script>
import velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui.js'
export default {
  props: [''],
  data () {
    return {
    }
  },
  computed: {
  },
  components: {
  },
  methods: {
    left () {
      // console.log(this.$refs.left)
      // 使用jquery/zepto
      // $(this.$refs.left).velocity({
      //   left: '200px'
      // }, {
      //   duration: 450,
      //   delay: 1000
      // })
      // 不依赖jquery
      velocity(this.$refs.left, {
        opacity: 0.5,
        fontSize: '38px'
      }, {
        // 默认参数
        duration: 400, // 动画执行时间
        easing: 'swing', // 缓动效果
        queue: '', // 队列
        begin: undefined, // 动画开始时的回调函数
        progress: undefined, // 动画执行中的回调函数（该函数会随着动画执行被不断触发）
        complete: undefined, // 动画结束时的回调函数
        display: undefined, // 动画结束时设置元素的 css display 属性
        visibility: undefined, // 动画结束时设置元素的 css visibility 属性
        loop: false, // 循环
        delay: false, // 延迟
        mobileHA: true // 移动端硬件加速（默认开启）
      })
      velocity(this.$refs.left, {
        color: 'red'
      }, {
        duration: 600,
        queue: ''
      })
    },
    modifyColor () {
      velocity(this.$refs.colors,
      // {
      //   backgroundColor: '#982',
      //   width: '230px'
      // },
        'fadeOut',
        {
          duration: 'fast',
          easing: 'easeInSine',
          loop: 3,
          display: 'none',
          begin: (ele) => console.log(ele)
        }
      )
    },
    scroll () {
      velocity(document.getElementsByClassName('color')[0],
        'scroll',
        {
          container: document.getElementsByTagName('html')[0]
        }
      )
    },
    queue () {
      velocity(this.$refs.colors,
        {width: '75px'},
        {
          queue: 'a',
          duration: 500
        }
      )
      velocity(this.$refs.colors,
        {width: '175px'},
        {
          queue: 'a'
        }
      )
      velocity(this.$refs.colors,
        {width: '105px'},
        {
          queue: 'a'
        }
      )
      // velocity(this.$refs.colors, {dequeue: 'a'})
      velocity.Utilities.dequeue(this.$refs.colors, 'a')
    },
    reverse () {
      velocity(this.$refs.colors,
        {width: '75px'},
        {
          duration: 500
        }
      )
      // velocity(this.$refs.colors,
      //   'stop'
      // )
      velocity(this.$refs.colors, 'reverse')
    },
    promise () {
      let value = velocity.hook(this.$refs.colors, 'width', '30px')
      console.log(value)
      velocity.mock = 10
      velocity({
        e: this.$refs.colors,
        // {
        //   width: '80px'
        // },
        // {
        //   duration: 1000
        // }
        p: {
          width: '80px'
        },
        o: {
          duration: 1000
        }
      }
      ).then(() => {
        console.log('then')
      }).catch(() => {
        console.log('error')
      })
    },
    customValue () {
      velocity(
        this.$refs.colors,
        {
          opacity: [0, 0.5],
          height: [200, 50]
        }
      )
    },
    sequence () {
      let arr = [
        {e: this.$refs.colors, p: {width: '75px'}, o: {duration: 1000}},
        {e: this.$refs.colors, p: {width: '175px'}, o: {duration: 500}},
        {e: this.$refs.colors, p: {width: '125px'}, o: {duration: 1200}}
      ]
      velocity.RunSequence(arr)
    },
    register () {
      velocity.RegisterEffect(
        'hei',
        {
          defaultDuration: 1000,
          calls: [
            // [ {height: '120px'}, 0.5, {duration: 4000} ],
            [ {height: 300} ],
            [ {height: 120} ],
            [ {height: 150} ]
          ]
          // reset: {}
        }
      )
      velocity.RegisterEffect(
        'wid',
        {
          defaultDuration: 2000,
          calls: [
            [ {width: 120}, 0.5 ],
            [ {width: 300}, 0.5 ]
            // [ {width: '120px'}, 0.3 ],
            // [ {width: '300px'}, 0.3 ],
            // [ {width: '120px'}, 0.3 ],
            // [ {width: '300px'}, 0.3 ],
            // [ {width: '150px'}, 0.3 ]

            // [ { scaleX: 1.5 }, 0.50 ], // 0.50 为 动画总时间的50%
            // [ { scaleX: 1 }, 0.50 ],
            // [ { scaleX: 1.5 }, 0.50 ], // 0.50 为 动画总时间的50%
            // [ { scaleX: 1 }, 0.50 ]
          ]
          // reset: {}
        }
      )
      velocity(this.$refs.colors, 'hei')
      velocity(this.$refs.colors, 'wid')
    },
    star () {
      // this.left()
      // this.modifyColor()
      // this.scroll()
      // this.queue()
      // this.reverse()
      // this.promise()
      // this.customValue()
      // this.sequence()
      this.register()
    }
  },
  created () {},
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.basic {
  .left {
    position: relative;
    left: 0;
    top: 0;
  }
  .color {
    display: inline-block;
    background-color: #290;
    width: 283px;
    height: 89px;
  }
}
</style>
