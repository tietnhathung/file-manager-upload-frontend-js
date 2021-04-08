import { createStore } from 'vuex'

 let store  = createStore({
    state () {
        return {
            count: 99
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
});

export default store;