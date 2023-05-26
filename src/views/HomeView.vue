<template>
  <div class="home">
    <v-row>
         <v-carousel cycle class="mx-5">
          <v-carousel-item
            v-for="item in banner"
            :key="item.index"
            :src="item.img"
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
      <v-slide-group-item v-for="items in productStore.product" :key="n"> 
        <ProductCardSm :enabled="true" :product="items" />
      </v-slide-group-item> 
    </v-slide-group>
    </v-row>
  </div>
</template>

<script setup>
import {useUserStore} from '@/store/user.js'
import ProductCardSm from '@/components/ProductCardSm.vue'
import {useProductStore} from '@/store/products.js'
import { onMounted } from 'vue';
const productStore = useProductStore(); 
//state methods
const banner = [{text:"Hasta 12 meses sin interéses en tarjetas de crédito banamex. Solo válido desde el 30 de mayo al 1 de julio del año en curso",img:"https://becas.news/wp-content/uploads/banamex_large2x_mar28.1xAcDvlZrnDZmu9ofPturd.png"},{text:"Promociones especiales para tu primer compra",img:"https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399"}]
const userStore=useUserStore();
onMounted(()=>{
        productStore.fillItemList()
    })
</script>
