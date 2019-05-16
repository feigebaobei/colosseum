const keepalive = [
  {
    path: '/keepalive',
    name: '/keepalive',
    component: (resolve) => {
      require(['@/components/keepalive/index.vue'], resolve)
    },
    children: [
      {
        path: 'first',
        name: 'first',
        component: (resolve) => {
          require(['@/components/keepalive/first.vue'], resolve)
        },
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'second',
        name: 'second',
        component: (resolve) => {
          require(['@/components/keepalive/second.vue'], resolve)
        },
        meta: {
          keepAlive: false
        }
      }
    ]
  }
]
export default keepalive
