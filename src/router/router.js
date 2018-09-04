import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    name: 'home', // 命名路由
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. 懒加载组件
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  // 动态路由
  {
    path: '/async/:name',
    component: () => import('@/views/async.vue')
  },
  // 嵌套路由
  {
    path: '/parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  }
]
