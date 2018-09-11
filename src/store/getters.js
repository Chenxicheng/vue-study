// 相当于 vue 中的计算属性
const getters = {
	appNameWithVersion: (state) => {
		// es6 模板语法
		return `${state.appName} v2.0`
	}
}

export default getters