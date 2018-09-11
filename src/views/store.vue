<template>
	<div>
		<a-input @input="handleInput"/>
		<p>
			{{inputValue}} -> LastLetter is {{ inputValueLastLetter }}
		</p>
		<!-- <a-show :content="inputValue"/> -->
		<!-- <p>
			{{appName}}
		</p>
		<p>
			{{ userName }}
		</p> -->
		<!-- <p>
			appName:  {{ appName }}
		</p> -->
		<p>
			userName： {{ userName }}
		</p>
		<!-- <p>
			appNameWithVersion : {{ appNameWithVersion }}
		</p> -->
		<p>
			userNameFirstLetter: {{ firstLetter }}
		</p>
	</div>
</template>
<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState, mapGetters } from 'vuex';
// 命名空间引入
// import { createNamespacedHelpers } from 'vuex'
// const { mapState, mapGetters } = createNamespacedHelpers('user')
export default {
	name: 'store',
	data () {
		return {
			inputValue: ''
		}
	},
	components: {
		AInput,
		AShow
	},
	computed: {
		// state 使用
		// ... es6中展开操作符，在这里展开一个对象
		//数组模式 
		//...mapState([
		// 	'appName'
		// ])
		// 对象模式, 为一个回调函数，传入state参数
		// ...mapState({
		// 	appName: state => state.appName,
		// 	userName: state => state.user.userName
		// })
		// 命名空间模式，导入模块, 不需要写模块名称
		// ...mapState({
		// 	userName: state => state.userName
		// })
		// 非命名空间，引入模块，不引入createNamespacedHelpers， 直接使用mapState
		...mapState('user',{
			userName: state => state.userName
		}),
		// 根据$store.state 获取数据
		// appName () {
		// 	return this.$store.state.appName
		// },
		// userName () {
		// 	return this.$store.state.user.userName
		// }

		// getters 使用
		// $store.getters获取数据
		// appNameWithVersion () {
		// 	return this.$store.getters.appNameWithVersion
		// },
		// mapGetters 数组模式
		// ...mapGetters([
		// 	'appNameWithVersion'
		// ]),
		// 有模块模式
		...mapGetters('user', [
			'firstLetter'
		]),
		// 命名空间引入, 若命名空间未设定或为false，可直接引入模块getters中的属性值
		// ...mapGetters(['firstLetter']),
		inputValueLastLetter () {
			return this.inputValue.substr(-1, 1)
		}
	},
	methods: {
		handleInput (val) {
			this.inputValue = val
		}
	}
}
</script>
