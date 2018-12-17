const common = [
  {
    path: '/common',
    name: '/common',
    component: (resolve) => {
      require(['@/components/common/index.vue'], resolve)
    }
  }
]

export default common
