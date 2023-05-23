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
    <Footer class="footer"/>
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
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2%;            /* Footer height */
}
</style>
