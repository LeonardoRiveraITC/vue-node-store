<template>
  <v-app>
  <nav-bar v-if="userStore.username"/> 
    <v-main>
      <router-view/>
    </v-main>
  </v-app>  
</template>

<script setup>
import NavBar from './components/NavBar.vue'
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
