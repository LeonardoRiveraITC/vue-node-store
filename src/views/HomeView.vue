<template>
  <div class="home">
    <v-row>
         <v-carousel cycle class="mx-5">
          <v-carousel-item
            v-for="item in banner"
            :key="item.index"
            :src="item.img"
            cover
          >
            <p class="text-subtitle-2">{{item.text}}</p>
          </v-carousel-item>
    </v-carousel>
    </v-row>
  <v-row>
  <h1 class="mx-auto my-6"> Productos populares</h1>
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
const banner = [{text:"Hasta 12 meses sin interéses en tarjetas de crédito banamex. Solo válido desde el 30 de mayo al 1 de julio del año en curso",img:"https://1000marcas.net/citibanamex-logo/"},{text:"Promociones especiales para tu primer compra",img:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}]
const product=[{name:"Flipper zero",desc:"Flipper Zero Rev2",rev:"5",img:"https://m.media-amazon.com/images/I/51xPGmiNQGL._AC_SX679_.jpg",seller:"Amazon basics"}]
const userStore=useUserStore();
</script>
