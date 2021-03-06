import Vue from 'vue'
import Router from 'vue-router'

import first from './first.js' // 把以前没有整理的路由都分到first.js文件里
import velocity from './velocity.js'
import plugin from './plugin.js'
import common from './common.js'
import keepAlive from './keepAlive.js'
import confusion from './confusion.js'

Vue.use(Router)

const vueRouter = new Router({
  // mode: 'history', // 默认 hash
  routes: [
    ...first,
    ...velocity,
    ...plugin,
    ...common,
    ...keepAlive,
    ...confusion
  ]
})
// vueRouter.beforeEach(function (to, from, next) {
//   if (to.path === '/route/five') {
//     vueRouter.push('/route/second')
//   }
//   next()
// })
// vueRouter.afterEach(function (to, from) {
//   if (to.path === '/route/five') {
//     vueRouter.push('/route/second')
//   }
// })
export default vueRouter
