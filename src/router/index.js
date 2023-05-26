import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Products from '@/views/Products.vue'
import Login from '@/views/Login.vue'
import Profile from '@/views/Profile.vue'
import Conversion from '@/views/CurrencyConversion.vue'
import Product from '@/views/Product.vue'
import CartView from '@/views/Cart.vue'
import RegisterView from '@/views/Register.vue'
import EditProfile from '@/views/EditProfile.vue'
import PayMethod from '@/views/PayMethod.vue'
import Direction from '@/views/Direction.vue'
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
  {
    path: '/editprofile',
    name: 'EditProfile',
    component: EditProfile  
  }, 
  {
    path: '/paymethod',
    name: 'PayMethod',
    component: PayMethod
  }, 
  {
    path: '/direction',
    name: 'Direction',
    component: Direction 
  },  
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
