import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/vue/views/HomePage.vue';
import About from '@/vue/views/AboutPage.vue';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: Home,
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
