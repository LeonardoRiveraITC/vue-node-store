import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Products from '@/views/Products.vue'
import Login from '@/views/Login.vue'
import Profile from '@/views/Profile.vue'
import Conversion from '@/views/CurrencyConversion.vue'
import Product from '@/views/Product.vue'
import CartView from '@/views/Cart.vue'
import RegisterView from '@/views/Register.vue'
import {useUserStore} from '@/store/user.js'
const routes = [
  {
    path: '/register',
    name: 'register',
    component: RegisterView 
  },
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
