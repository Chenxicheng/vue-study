<template>
	<div class="tel">
		<p>
			{{message}}
		</p>
	
	</div>
</template>
<script>
export default {
	data () {
		return {
			message: ''
		}
	},
	mounted () {
		// 给bus添加事件监听
		this.$bus.$on('on-click', msg => {
			this.message = msg
		})
	}
}
</script>

<style>
	.tel {
		border: 1px solid red;
	}
</style>

