import Home from '@/views/Home.vue'

/**
 * 1. 路由组件传参, props
 * 	a. 布尔值
 * 	b. 对象类型
 * 	c: 函数形式，传参route
 */

export default [
  {
		path: '/',
		alias: '/home_page', // 别名
    name: 'home', // 命名路由
		component: Home,
		props: route => ({food: route.query.name}),
		// 路由守卫
		beforeEnter: (to, from, next) => {
			// if (from.name === 'about') alert('这是从about来的')
			// else alert('这不是从about来的')
			next()
		}
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. 懒加载组件
		component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
		props: {
			food: 'banana'
		},
		meta: {
			title: '关于'
		}
  },
  // 动态路由
  {
		path: '/async/:name',
		name: 'async',
		component: () => import('@/views/async.vue'),
		props: true
		
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
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login.vue')
	},
	{
		path: '*',
		component: () => import('@/views/error_page') 
	}
]
