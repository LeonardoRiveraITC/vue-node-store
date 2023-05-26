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
import User_List from '@/views/DataTables/User_list.vue'
import Sales from '@/views/DataTables/Sales.vue'
import Product_List from '@/views/DataTables/Product_list.vue'
import Discount_List from '@/views/DataTables/Discount_list.vue'
import Category_List from '@/views/DataTables/Category_list.vue'
import Pay_Method_list from '@/views/DataTables/Pay_Method_list.vue'
import {useUserStore} from '@/store/user.js'
import { Chart } from 'chart.js'
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
  {
    path: '/user_list',
    name: 'User_List',
    component: User_List
  },
  {
    path: '/sales',
    name: 'Sales',
    component: Sales
  }, 
  {
    path: '/product_list',
    name: 'Product_List',
    component: Product_List
  },  
  {
    path: '/pay_method_list',
    name: 'Pay_Method_List',
    component: Pay_Method_list
  }, 
  {
    path: '/discount_list',
    name: 'Discount_List',
    component: Discount_List
  }, 
  {
    path: '/category_list',
    name: 'Category_List',
    component: Category_List
  },   
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
