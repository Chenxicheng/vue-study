import Home from '@/views/Home.vue'

export default [
  {
		path: '/',
		alias: '/home_page', // 别名
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
		name: 'async',
    component: () => import('@/views/async.vue')
  },
  // 嵌套路由
  {
		path: '/parent',
		name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
	},
	// 命名视图
	{
		path: '/named_view',
		components: {
			default: () => import('@/views/child.vue'),
			email: () => import('@/views/email.vue'),
			tel: () => import('@/views/tel.vue')
		}
	},
	// 重定向
	{
		path: '/main',
		redirect: to => '/'
	}
]
