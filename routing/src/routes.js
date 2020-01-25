import Home from './components/Home.vue'
import User from './components/user/User.vue'
import UserStart from './components/user/UserStart.vue'
import UserEdit from './components/user/UserEdit.vue'
import UserDetail from './components/user/UserDetail.vue'

export const routes = [
    { path: '', component: Home },
    { path: '/user', component: User, children: [
        { path: '', component: UserStart },
        { path: ':id', component: UserDetail, props: true, beforeEnter: function(to, from, next) {
            console.log('inside route setup');
            next();
        } },
        { path: ':id/edit', component: UserEdit, name: 'userEdit' }
    ] },
    { path: '/redirect-me', redirect: '/user' },
    { path: '*', redirect: '/' }
];