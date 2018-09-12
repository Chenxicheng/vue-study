/**
 * 封装axios
 */
import axios from 'axios'
import { baseURL } from '@/config'

class HttpRequest {
	// 每个class的必要方法
	constructor (baseUrl = baseURL) {
		this.baseUrl = baseUrl
		this.queue = {} // 队列
	}

	// 内部配置
	getInsideConfig () {
		const config = {
			baseURL: this.baseUrl,
			header: {

			}
		}
		return config
	}

	// 拦截器
	intercepts (instance, url) {
		// 请求拦截器
		instance.interceptors.request.use(config => {
			// 添加全局 loading...
			// Spin.show()
			if (Object.keys(this.queue).length) {
				// Spin.show() loading
			}
			this.queue[url] = true
			return config
		}, error => {
			return Promise.reject(error)
		})

		instance.interceptors.response.use(res => {
			delete this.queue[url]
			console.log(res)
			const { data, status } = res
			return { data, status }
		}, error => {
			return Promise.reject(error)
		})
	}

	// 请求
	request (options) {
		const instance = axios.create()
		options = Object.assign(this.getInsideConfig(), options) // 合并对象
		this.intercepts(instance, options.url)
		return instance(options)
	}
}

export default HttpRequest