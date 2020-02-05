import Vuex from 'vuex'
import Vue from 'vue'
import userAuth from './modules/user-auth'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: [userAuth]
});