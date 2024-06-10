import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
<<<<<<< HEAD
import AppHeader from './pages/AppHeader.vue';
=======
import AppHome from './pages/AppFooter.vue';
import AppFooter from './pages/AppFooter.vue';

>>>>>>> 4ed4c3f4750c322feb8bcc5672e270a4b92f0315
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
<<<<<<< HEAD
            name: 'AppHeader',
            path: '/AppHeader',
            component: AppHeader,
        }
=======
            name: 'footer',
            path: '/footer',
            component: AppFooter,
        },

>>>>>>> 4ed4c3f4750c322feb8bcc5672e270a4b92f0315
    ],
});

export { router };