<template>
  <div class="home">
    <button @click="handleClick('back')">返回上一页</button>
		<button @click="handleClick('push')">跳转parent</button>
		<button @click="handleClick('async')">跳转async</button>
		<button @click="handleClick('replace')">替换parent</button>
		<div>
			<b>{{food}}</b>
		</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
	},
	props: {
		food: {
			type: String,
			default: 'apple'
		}
	},
	// 组件内守卫
	// 页面进入前执行方法
	beforeRouteEnter (to, from, next) {
		// 此处页面还未渲染，不能使用this
		// 若想使用this, next(vm => {})
		next(vm => {
			console.log(vm)
		})
	},
	// 页面离开时执行方法
	beforeRouteLeave (to, from, next) {
		// 此处可以使用this
		const leave = confirm('您确定离开')
		if (leave) next()
		else next(false)
	},
	methods: {
		// 可编程路由
		handleClick (type) {
			const name = 'cxc123'
			if (type === 'back') this.$router.back()
			else if (type === 'push') this.$router.push({
				name: 'parent',
				// 传参
				query: {
					name: 'cxc'
				}
			})
			else if (type === 'replace') this.$router.replace({
				name: 'parent'
			})
			else if (type === 'async') this.$router.push({
				path: `async/${name}`,
				params: {
					name: 'cxc'
				}
			})
		}
	}
}
</script>
