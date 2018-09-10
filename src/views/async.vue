<template>
	<div>{{ name }}</div>
</template>
<script>
export default {
	props: {
		name: {
			type: String,
			default: 'cxc'
		}
	},
	beforeRouteUpdate (to, from, next) {
		// 可以使用this
		console.log(to.name, from.name)
	}
}
</script>

