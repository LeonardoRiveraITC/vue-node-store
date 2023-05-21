<template>
  <div class="home">
  <v-row>
  <h1 class="mx-auto my-3"> Productos populares</h1>
    </v-row>
    <v-row>
 	<v-slide-group
 		   show-arrows
 		 >
      <v-slide-group-item v-for="items in product" :key="n"> 
        <ProductCardSm :product="items" />
      </v-slide-group-item> 
    </v-slide-group>
    </v-row>
  </div>
</template>

<script setup>
import {useUserStore} from '@/store/user.js'
import ProductCardSm from '@/components/ProductCardSm.vue'
//state methods
const product=[{name:"Flipper zero",desc:"Flipper Zero Rev2",rev:"5",img:"https://m.media-amazon.com/images/I/51xPGmiNQGL._AC_SX679_.jpg",seller:"Amazon basics"},
{name:"Flipper zero",desc:"Flipper Zero Rev2",rev:"5",img:"https://m.media-amazon.com/images/I/51xPGmiNQGL._AC_SX679_.jpg",seller:"Amazon basics"},
{name:"Flipper zero",desc:"Flipper Zero Rev2",rev:"5",img:"https://m.media-amazon.com/images/I/51xPGmiNQGL._AC_SX679_.jpg",seller:"Amazon basics"},
{name:"Flipper zero",desc:"Flipper Zero Rev2",rev:"5",img:"https://m.media-amazon.com/images/I/51xPGmiNQGL._AC_SX679_.jpg",seller:"Amazon basics"}]
const userStore=useUserStore();
</script>
