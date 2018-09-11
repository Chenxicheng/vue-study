const state = {
  userName: 'cxc'
}

// 此处用于多个组件
const getters = {
	firstLetter: (state) => {
		return state.userName.substr(0, 1)
	}
}

const mutations = {
  //
}
const actions = {
  //
}
export default {
	namespaced: true, // 命名空间，使该模块更佳密闭
	state,
	getters,
  mutations,
  actions
}
