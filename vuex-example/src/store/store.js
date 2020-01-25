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
    }
});