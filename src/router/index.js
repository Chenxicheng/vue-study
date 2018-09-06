import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

/**
 * 不声明mode，默认是hash模式, 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载, 有#字符
 * 
 * history模式，URL 就像正常的 url，没有#字符，需要后台支持，返回没有配置的资源，返回404
 */
Vue.use(Router)


export default new Router({
	mode: 'history',
  routes
})
