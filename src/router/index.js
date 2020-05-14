import Vue from 'vue';
import VueRouter from 'vue-router';
import Rock from '../components/Rock.vue';
import Foreign from '../components/Foreign.vue';

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/rock' },
    { path: '/rock', component: Rock },
    { path: '/foreign', component: Foreign }
]

const router = new VueRouter({
    mode: 'history',
    routes 
})

export default router