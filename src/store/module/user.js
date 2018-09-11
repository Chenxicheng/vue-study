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
  SET_USER_NAME (state, params) {
		state.userName = params
	}
}
const actions = {
  updateUserName ({ commit, state, rootState, dispatch }) {
		// rootState.appName
		// dispatch('xxx')
	},
	xxx () {

	}
}
export default {
	namespaced: false, // 命名空间，使该模块更佳密闭
	state,
	getters,
  mutations,
	actions,
	modules: {
		 // 
	}
}
