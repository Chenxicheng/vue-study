<template>
	<div class="email">
		<button @click="handleClick">点我</button>
	</div>
</template>
<script>
export default {
	mounted () {
		console.log(this.$bus)
	},
	methods: {
		handleClick () {
			// 给bus添加事件
			this.$bus.$emit('on-click', 'hello')
		}
	}
}
</script>
<style>
.email{
	border: 1px solid green;
}
</style>


