<template>
      <v-app-bar
        color=""
        prominent
      >
<v-img :to="Home" :src="logo" max-height="100" max-width="100"/>
          <v-list-item v-for="item in navLinks" :key="item.id" :prepend-icon="item.icon" :title="item.title" :to="{'name':item.name}"/> 
              <v-list-item  prepend-icon="mdi-card-account-details" :title="userStore.username ? 'Mi cuenta': 'Login'" :to="userStore.username ? 'profile':'login'"/> 
        <v-spacer></v-spacer>
        <p class="cartNotification">{{cartStore.getItemsNumber}}</p>  
        <v-list-item  prepend-icon="mdi-cart"  :to="{'name':'cart'}"/> 
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
    {title:"Home",name:"home",icon:"mdi-home"},
    {title:"Productos",name:"products",icon:"mdi-duck"},
]
</script>
