const plugin = [
  {
    path: '/plugin',
    // name: '/plugin',
    component: (resolve) => {
      require(['@/components/plugin/index.vue'], resolve)
    },
    // redirect: '/',
    children: [
      {
        path: '/2',
        name: 'console',
        component: (resolve) => {
          require(['@/components/plugin/vConsole.vue'], resolve)
        }
      },
      {
        path: '/',
        name: 'other',
        component: (resolve) => {
          require(['@/components/plugin/other.vue'], resolve)
        }
      }
    ]
  }
]

export default plugin
