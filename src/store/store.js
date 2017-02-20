import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        sticky: false
    },
    getters: {
        sticky: state => {
            return state.sticky;
        }
    },
    mutations: {
        updateSticky: state => {
            state.sticky = !state.sticky;
        }
    },
    actions: {
        updateSticky: ({ commit }) => {
            commit('updateSticky');
        }
    }
});
