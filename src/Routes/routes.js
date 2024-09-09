import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';
import Dashboard from '../components/DashBoard.vue';
import store from '@/store/store';

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


router.beforeEach((to, from, next) => {
    const isAuthenticated = store.getters.isAuthenticated;
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isAuthenticated) {
            alert("Please login First!")
            next({ name: 'Login' }); 
        } else {
            next(); 
        }
    } else {
        next()
    }
});

export default router;
