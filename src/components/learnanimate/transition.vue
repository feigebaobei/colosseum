<template>
  <div class="animatediv">
    <h2>过渡</h2>
    <p>从一种状态转变为另一种状态</p>
    <div class="transitionEx0"></div>
    <h2>animate.css</h2>
    <!-- <div :class="compclass"></div> -->
    <div :class="[testClass,animatedClass,currentAnimate, isInfinite]"></div>
    <div class="animatebox" @click="changeAnimate()">
      <div>
        <input type="checkbox" id="changeInfinite" v-model="checked">
        <label for="changeInfinite">重复播放动画</label>
      </div>
      <button v-for="(name, index) in animateName" :key="index">{{name}}</button>
    </div>
    <hr>
    <div class="firstDemo">
      <button @click="fdShow = !fdShow">toggle</button>
      <transition name="fade" :duration="6000" appear>
        <p v-if="fdShow" key="sdf">hello</p>
        <p v-else>hide</p>
      </transition>
    </div>
    <div>
      <p>v-enter 进入开始状态(2.1.8移除)</p>
      <p>v-enter-active 进入过渡生效时的状态。可以定义过渡属性，如：时间、延迟、曲线。</p>
      <p>v-enter-to 进行过渡的结束状态。</p>
      <p>v-leave 离开开始状态(2.1.8移除)</p>
      <p>v-leave-active 离开过渡生效时的状态。</p>
      <p>v-leave-to 离开结束状态</p>
    </div>
    <div>
      <p>自定义过渡类名</p>
      <p>enter-class</p>
      <p>enter-active-class</p>
      <p>enter-to-class(2.1.8+)</p>
      <p>leave-class</p>
      <p>leave-active-class</p>
      <p>leave-to-class(2.1.8+)</p>
    </div>
    <div>
      <p>css动画</p>
      <p></p>
    </div>
    <div>
      <p>before-enter</p>
      <p>enter(必须使用done进行回调)</p>
      <p>after-enter</p>
      <p>enter-cancelled</p>
      <p>before-leave</p>
      <p>leave(必须使用done进行回调)</p>
      <p>after-leave</p>
      <p>leave-cancelled</p>
    </div>
    <div>
      <p>可以使用animation/velocity.js</p>
    </div>
    <div>
      <p>设置appear</p>
      <p>appear-class</p>
      <p>appear-active-class</p>
      <p>appear-to-class</p>
      <p>@befor-appear</p>
      <p>@appear</p>
      <p>@after-appear</p>
      <p>@appear-cancelled</p>
    </div>
    <hr>
    <div ref="first" class="basisSize ts" @click="switchSize">first</div>
    <div ref="first" class="basisSize ts" @click="switchSize">second</div>
  </div>
</template>

<script>
import animateName from '../../lib/animate.json'
import $ from 'jquery'
// import animatin from '../../assets/style/animate.css'
require('../../assets/style/animate.css')

export default {
  data: function () {
    return {
      animateName: animateName,
      testClass: 'testClass',
      animatedClass: 'animated',
      currentAnimate: '',
      // isInfinite: 'infinite',
      checked: true,
      // demo
      fdShow: true
    }
  },
  computed: {
    compclass: function () {
      return {
        animated: true,
        testClass: true,
        currentAnimate: this.currentAnimate
      }
    },
    isInfinite: function () {
      if (this.checked) {
        return 'infinite'
      } else {
        return ''
      }
    }
  },
  methods: {
    changeAnimate: function () {
      if (event.target.tagName === 'BUTTON') {
        let $dom = $(event.target)
        let value = $dom.text()
        console.log(value)
        this.currentAnimate = value
      } else {
        console.log('1551')
      }
    },
    changeInfinite: function () {
      console.log(this.isInfinite)
    },
    switchSize (event) {
      //
      console.log(this.$refs.first)
      this.$refs.first.classList.add('basisBig')
      // .classList.add(' buttonBig')
    }
  }
}
</script>

<style lang="scss">
  .testClass {
    width: 100px;
    height: 80px;
    background: #e82;
  }
  .transitionEx0
  {
    width:100px;
    height:100px;
    background:red;
    transition-property:width;
    transition-duration:1s;
    transition-timing-function:linear;
    transition-delay:2s;
    /* Safari */
    -webkit-transition-property:width;
    -webkit-transition-duration:1s;
    -webkit-transition-timing-function:linear;
    -webkit-transition-delay:2s;
  }
  .transitionEx0:hover
  {
    width:200px;
  }
  .animatebox {
    margin-top: 15px;
    button {
      margin: 2px 5px;
    }
  }
  // .animatebox > button {
  //   margin: 2px 5px;
  // }
  // demo
  // .fade-enter-active,
  // .fade-leave-active {
    // transition: opacity 1.5s;
  // }
  // .fade-enter,
  // .fade-leave-to {
    // opacity: 0;
  // }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 1.5s;
  }
  .fade-leave-active {
    transition: opacity 3s;
  }
  .fade-leave-to {
    opacity: 0;
  }
  .basisSize {
    font-size: 18px;
  }
  .ts {
    transition: all 1s;
  }
  .basisBig {
    font-size: 22px;
  }
</style>
