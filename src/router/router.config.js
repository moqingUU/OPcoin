
import { createRouter, createWebHistory, } from 'vue-router'
import home from '../views/home.vue'
import product from '../views/product.vue'
import web3 from '../views/web3.vue'
import OPhome from '../views/OPhome_app/app_home/OPhome.vue'
import token from '../views/Token_usdt/token_list.vue'
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/product',
        name: 'product',
        component: product
    },
    {
        path: '/web3',
        name: 'web3',
        component: web3
    },
    {
        path: '/OPhome',
        name: 'OPhome',
        component: OPhome
    },
    {
        path: '/token',
        name: 'token',
        component: token
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

