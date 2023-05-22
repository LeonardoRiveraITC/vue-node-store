<template>
  <v-app>
  <v-container>
  <nav-bar /> 
  <v-spacer/>
  <v-spacer/>
    <v-main>
      <router-view/>
    </v-main>
    </v-container>
    <v-spacer></v-spacer>
    <Footer />
  </v-app>  
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import {useUserStore} from '@/store/user.js'
//state methods
const userStore=useUserStore();
</script>
<style>
.cartNotification{
  float: left;
  height: 20px;
  width: 20px;
  margin-bottom: 15px;
  border: 2px solid red;
  clear: both;
  text-align: center;
}
</style>
