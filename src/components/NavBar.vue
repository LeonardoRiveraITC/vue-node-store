<template>
      <v-app-bar
        color=""
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>FiguraX</v-toolbar-title>
          <v-list-item v-for="item in navLinks" :key="item.id" :prepend-icon="item.icon" :title="item.title" :to="item.to"/> 
        <v-spacer></v-spacer>
        <p class="cartNotification">{{cartStore.getItemsNumber}}</p>  
        <v-list-item  prepend-icon="mdi-cart" title="Carrito" to="cart"/> 
      </v-app-bar>

</template>

<script setup>
import {useCartStore} from '@/store/cart.js'
const cartStore=useCartStore();
import {ref} from "vue"
let drawer=ref(true)
const navLinks=[
    {title:"Home",to:"/",icon:"mdi-home"},
    {title:"Productos",to:"products",icon:"mdi-duck"},
    {title:"Mi cuenta",to:"profile",icon:"mdi-card-account-details"},
]
</script>
