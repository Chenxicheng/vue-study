import { getAppName } from '@/api/app'

// 若调用后台接口异步请求，不能使用mutation，而应调用actions中所注册的方法
const actions = {
	// updateAppName ({ commit }) {
	// 	getAppName().then(res => {
	// 		const {info: {appName}} = res
	// 		commit('SET_APP_NAME', {
	// 			appName
	// 		})
	// 	}).catch(err => {
	// 		console.log(err)
	// 	})
	// }

	// es8使用方法
	async updateAppName ( {commit} ) {
		try {
			const { info: {appName }} = await getAppName()
			commit('SET_APP_NAME', {appName})
		} catch (err) {
			console.log(err)
		}
		
	}
}

export default actions