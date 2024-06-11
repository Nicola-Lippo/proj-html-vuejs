import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppHeader from './pages/AppHeader.vue';
import AppContacts from './pages/AppContacts.vue';

const router = createRouter({
    history: createWebHistory(),
    //routes è un array di oggetti con chiavi specifiche
    routes: [
        {
            name: 'home',
            path: '/',
            component: AppHome,
        },
        {
            name: 'Header',
            path: '/Header',
            component: AppHeader,
        },
        {
            name: 'Contacts',
            path: '/Contacts',
            component: AppContacts,
        },
    ],
});

export { router };