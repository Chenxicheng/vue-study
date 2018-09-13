import Mock from 'mockjs'
import { baseURL } from '@/config'
import { getUserInfo } from './response/user'
const Random = Mock.Random
Mock.mock(/\/getUserInfo/, 'post', getUserInfo)

Mock.setup({
	timeout: 500
})

Random.extend({
	fruit () {
		const fruit = ['apple', 'banana', 'lemon']
		return this.pick(fruit)
	}
})

export default Mock
