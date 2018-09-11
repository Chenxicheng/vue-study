import Vue from 'vue'

const mutations = {
	// params, 参数，可以对象或非对象形式
	SET_APP_NAME (state, params) {
		state.appName = params.appName
	},
	SET_APP_VERSION (state) {
		// 在state未定义appVersion属性值，可通过Vue.set()方法进行定义，响应式编程
		Vue.set(state, 'appVersion', 'v2.0')
	}
}

export default mutations