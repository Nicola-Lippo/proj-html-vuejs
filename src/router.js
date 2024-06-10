import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';

const router = createRouter({
    history: createWebHistory(),
    //routes è un array di oggetti con chiavi specifiche
    routes: [
        {
            name: 'home',
            path: '/home',
            component: AppHome,
        },
    ],
});

export { router };