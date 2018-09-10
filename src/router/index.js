import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util'

/**
 * 不声明mode，默认是hash模式, 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载, 有#字符
 * 
 * history模式，URL 就像正常的 url，没有#字符，需要后台支持，返回没有配置的资源，返回404
 */
Vue.use(Router)

const router = new Router({
	mode: 'hash',
  routes
})

const HAS_LOGIN = true

// 全局前置守卫
router.beforeEach((to, from, next) => {
	
	console.log(to)
	to.meta && setTitle(to.meta.title)

	if (to.name !== 'login') {
		if (HAS_LOGIN) next()
		else next({ name: 'login' })
	} else {
		if (HAS_LOGIN) next({ name: 'home' })
		else next()
	}
})

// router.beforeResolve

// 路由后置钩子，在路由跳转后所作的操作
router.afterEach((to, from) => {
	// logining = false
})

/**
 * 1. 导航被触发
 * 2. 在失活的组件（即将离开的页面组件）里面调用离开守卫beforeRouteLeave
 * 3. 调用全局的前置守卫 beforeEach
 * 4. 在重用的组件里调用 beforeRouteUpdate
 * 5. 调用路由独享的守卫 beforeEnter
 * 6. 解析异步路由组件
 * 7. 在被激活的组件（即将进入的页面组件）里调用 beforeRouteEnter
 * 8. 调用全局的解析守卫 beforeResolve
 * 9. 导航被确认
 * 10. 调用全局的后置守卫 afterEach
 * 11. 触发DOM更新
 * 12. 用创建好的实例调用beforeRouterEnter守卫里传给next的回调函数
 */

export default router
