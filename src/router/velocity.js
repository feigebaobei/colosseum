const velocity = [
  {
    path: '/velocity',
    name: '/velocity',
    component: (resolve) => {
      require(['@/components/velocity/index.vue'], resolve)
    },
    children: [
      {
        path: 'basic',
        name: 'basic',
        component: (resolve) => {
          require(['@/components/velocity/basic.vue'], resolve)
        }
      }
    ]
  }
]
export default velocity
