import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      counter: 0
    },
    getters : {
        multipliedCounter: function (state) {
            return state.counter * 2;
        },
        stringCounter: function (state) {
            return state.counter + ' Clicks.';
        }
    },
    mutations: {
        increment: function (state, payload) {
            state.counter += payload;
        },
        decrement: function (state, payload) {
            state.counter -= payload;
        }
    },
    actions: {
        increment: function ({commit}, payload) {
            commit('increment', payload);
        },
        decrement: function ({commit}, payload) {
            commit('decrement', payload);
        }
    }
});