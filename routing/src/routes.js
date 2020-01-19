import Home from './components/Home.vue'
import UserStart from './components/user/UserStart.vue'

export const routes = [
    { path: '', component: Home },
    { path: '/user', component: UserStart }
];