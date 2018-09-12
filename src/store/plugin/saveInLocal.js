
// 插件
export default store => {
	// 当 store 初始化后调用
	// console.log('store初始化')
	if (localStorage.state) store.replaceState(JSON.parse(localStorage.state)) // store.replaceState(state) 用于替换state
	store.subscribe((mutations, state) => {
		// 每次 mutation 之后调用
		// mutation 的格式为 { type, params }
		// console.log('提交mutation')
		localStorage.state = JSON.stringify(state)
	})
}