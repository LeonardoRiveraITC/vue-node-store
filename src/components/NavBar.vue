<template>
      <v-app-bar
        color=""
        prominent
      >
<v-img :src="logo"/>
          <v-list-item v-for="item in navLinks" :key="item.id" :prepend-icon="item.icon" :title="item.title" :to="item.to"/> 
              <v-list-item  prepend-icon="mdi-card-account-details" :title="userStore.username ? 'Mi cuenta': 'Login'" :to="userStore.username ? 'profile':'login'"/> 
        <v-spacer></v-spacer>
        <p class="cartNotification">{{cartStore.getItemsNumber}}</p>  
        <v-list-item  prepend-icon="mdi-cart" title="Carrito" to="cart"/> 
      </v-app-bar>

</template>

<script setup>
import {useCartStore} from '@/store/cart.js'
import {useUserStore} from '@/store/user.js'
import logo from '../../public/logo.png' 
const cartStore=useCartStore();
const userStore=useUserStore();
import {ref} from "vue"
const navLinks=[
    {title:"Home",to:"/",icon:"mdi-home"},
    {title:"Productos",to:"products",icon:"mdi-duck"},
]
</script>
