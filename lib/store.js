// Initialize and export the`vuex` store.
export default new Vuex.Store({
    strict: true,


    state: {
        ready: false
    },


    getters: {
        isReady: state => {
            return state.ready;
        }
    },


    mutations: {
        SET_READY: (state, payload) => {
            state.ready = payload
        }
    },


    actions: {
        setReady: ({ commit }, payload) => {
            commit('SET_READY', payload)
        }
    }
});
