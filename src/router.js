import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppHeader from './pages/AppHeader.vue';
import AppHome from './pages/AppFooter.vue';
import AppFooter from './pages/AppFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    //routes è un array di oggetti con chiavi specifiche
    routes: [
        {
            name: 'home',
            path: '/home',
            component: AppHome,
        },
        {
            name: 'AppHeader',
            path: '/AppHeader',
            component: AppHeader,
        },
        {
            name: 'footer',
            path: '/footer',
            component: AppFooter,
        },
    ],
});

export { router };