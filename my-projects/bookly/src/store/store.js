import Vuex from 'vuex'
import Vue from 'vue'
import users from '../queries/users'
import router from '../../node_modules/vue-router'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        idToken: null,
        userId: null,
        user: null
    },
    mutations: {
        login: function (state, userData) {
            state.idToken = userData.idToken;
            state.userId = userData.userId;
        },
        register: function (state, userData) {
            state.idToken = userData.idToken;
            state.userId = userData.userId;
        },
        clearUserData: function (state) {
            state.idToken = null;
            state.userId = null;
            state.user = null;
        },
        storeUser: function (state, user) {
            state.user = user;
        }
    },
    actions: {
        tryAutoLogin: function (context) {
            var idToken = localStorage.getItem('idToken');

            if (!idToken) {
                return;
            }

            var expirationDate = localStorage.getItem('expirationDate');

            if (!expirationDate || expirationDate < new Date()) {
                return;
            }

            var userId = localStorage.getItem('userId');

            context.commit('login', {
                idToken: idToken,
                userId: userId
            });
        },
        setLogoutTimer: function (context, expirationTime) {
            setTimeout(() => {
                context.commit('clearUserData');
            }, expirationTime * 1000);
        },
        login: function (context, user) {
            users.login(user.email, user.password)
                .then(function (response) {
                    if (response && response.status == 200) {
                        context.commit('login', {
                            idToken: response.data.idToken,
                            userId: response.data.localId
                        });

                        var now = new Date();
                        var expirationDate = new Date(now.getTime() + response.data.expiresIn * 1000);

                        localStorage.setItem('expirationDate',expirationDate);
                        localStorage.setItem('idToken', response.data.idToken);
                        localStorage.setItem('userId', response.data.localId);

                        context.dispatch('fetchUser');
                        context.dispatch('setLogoutTimer', response.data.expiresIn);
                    }
                })
                .catch(function (error) {
                    console.error(error);
                });
        },
        register: function (context, user) {
            users
                .register(user.email, user.password)
                .then(function (response) {
                    if (response && response.status == 200) {
                        context.commit('register', {
                            idToken: response.data.idToken,
                            userId: response.data.localId
                        });

                        var now = new Date();
                        var expirationDate = new Date(now.getTime() + response.data.expiresIn * 1000);

                        localStorage.setItem('expirationDate',expirationDate);
                        localStorage.setItem('idToken', response.data.idToken);
                        localStorage.setItem('userId', response.data.localId);

                        context.dispatch('saveUser', user);
                        context.dispatch('setLogoutTimer', response.data.expiresIn);
                    }
                })
                .catch(function (error) {
                    console.error(error);
                });
        },
        logout: function (context) {
            if (!context.state.idToken) {
                return;
            }

            context.commit('clearUserData');

            localStorage.clear();

            router.push('/');
        },
        saveUser: function (context, user) {
            if (!context.state.idToken) {
                return;
            }

            users
                .save(user.username, user.email, user.password, context.state.idToken)
                .then(function (response) {
                    if (response && response.status == 200) {
                        context.dispatch('fetchUser');
                    }
                })
                .catch(function (error) {
                    console.error(error);
                });
        },
        fetchUser: function (context) {
            if (!context.state.idToken) {
                return;
            }

            users.getById(context.state.idToken)
                .then(function (response) {
                    if (response && response.status == 200) {
                        var user = response.data.users[0];

                        context.commit('storeUser', user);
                    }
                })
                .catch(function (error) {
                    console.error(error);
                });
        }
    },
    getters: {
        username: function (state) {
            return state.user ? state.user.email : null;
        },
        idToken: function (state) {
            return state.idToken;
        },
        isAuthenticated: function (state) {
            return state.idToken != null;
        }
    }
});