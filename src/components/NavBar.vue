<template>
      <v-app-bar
        color="yellow-darken-1"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>E-store</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>
        <v-btn variant="text" icon="mdi-filter"></v-btn>
        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" temporary>
        <v-list>
          <v-list-item v-for="item in navLinks" :key="item.id" :prepend-icon="item.icon" :title="item.title" :to="item.to"/> 
          <v-list-item @click="userStore.logout" prepend-icon="mdi-exit-to-app" title="Cerrar sesión" to="/login"/>
        </v-list>
      </v-navigation-drawer>
</template>

<script setup>
import {useUserStore} from '@/store/user.js'
const userStore=useUserStore();
import {ref} from "vue"
let drawer=ref(true)
const navLinks=[
    {title:"Home",to:"/",icon:"mdi-home-circle"},
    {title:"Mi perfil",to:"profile",icon:"mdi-card-account-details"},
    {title:"Usuarios",to:"users",icon:"mdi-account"},
    {title:"Categorias",to:"categories",icon:"mdi-account"},
    {title:"Metodo de pago",to:"payment",icon:"mdi-tag-plus"},
    {title:"Cupones",to:"coupons",icon:"mdi-tag-plus"},
]
</script>
