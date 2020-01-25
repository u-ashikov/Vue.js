import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      value: 0
    },
    getters : {
        dividedValue: function (state) {
            return state.value / 2;
        }
    },
    mutations: {
        updateValue: function (state) {
            state.value++;
        }
    },
    modules: {
        counter
    }
});