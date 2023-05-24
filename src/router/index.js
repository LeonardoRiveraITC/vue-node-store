import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Products from '@/views/Products.vue'
import Login from '@/views/Login.vue'
import Profile from '@/views/Profile.vue'
import Conversion from '@/views/CurrencyConversion.vue'
import Product from '@/views/Product.vue'
import CartView from '@/views/Cart.vue'
import {useUserStore} from '@/store/user.js'
const routes = [
  {
    path: '/cart',
    name: 'cart',
    component: CartView 
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product 
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }, 
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/calc',
    name: 'Calc',
    component: Conversion
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: Products  
  }, 
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
