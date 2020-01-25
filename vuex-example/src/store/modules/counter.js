const state = {
    counter: 0
}

const getters = {
    multipliedCounter: function (state) {
        return state.counter * 2;
    },
    stringCounter: function (state) {
        return state.counter + ' Clicks.';
    }
}

const mutations = {
    increment: function (state, payload) {
        state.counter += payload;
    },
    decrement: function (state, payload) {
        state.counter -= payload;
    }
}

const actions = {
    increment: function ({commit}, payload) {
        commit('increment', payload);
    },
    decrement: function ({commit}, payload) {
        commit('decrement', payload);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}