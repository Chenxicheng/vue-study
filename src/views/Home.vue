<template>
  <div class="home">
    <button @click="handleClick('back')">返回上一页</button>
		<button @click="handleClick('push')">跳转parent</button>
		<button @click="handleClick('async')">跳转async</button>
		<button @click="handleClick('replace')">替换parent</button>
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
