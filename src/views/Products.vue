<template>
<v-container>
 <div>
    <v-text-field
      label="Busqueda"
      v-model="search"
      hide-details="auto"
      prepend-icon="mdi-magnify"
    ></v-text-field>
  </div>
    <v-row>
    <v-col v-if="filteredProds.length" cols=4 v-for="item in filteredProds" >
        <ProductCardSm  :enabled="true" :product="item" />
    </v-col>   
    <v-col v-if="!filteredProds.length" cols=4 v-for="item in productStore.product" >
        <ProductCardSm  :enabled="true" :product="item" />
    </v-col>   
    </v-row>
</v-container>
</template>

<script setup>
import ProductCardSm from '@/components/ProductCardSm.vue'
import {useCartStore} from '@/store/cart.js'
import {useProductStore} from '@/store/products.js'
import {ref,reactive,watch,onMounted,onBeforeMount} from 'vue'
const cartStore=useCartStore();
let search=ref('');
const productStore=useProductStore();
let filteredProds=reactive([]);
onMounted(()=>{
        productStore.fillItemList()
    }),
watch(search,(newSearch, oldSearch) => {
    let searchLowered=search.value.toLowerCase();
        filteredProds=[]
        productStore.product.forEach(el =>{
            let pLowered=el.nombre_p.toString().toLowerCase();
                console.log(pLowered.includes(searchLowered))
                if(pLowered.includes(searchLowered)){
                        filteredProds.push(el)
                    }
            })
        if(search==''){
            productStore.product.forEach(el =>{
                    filteredProds.push(el)
                    }) 
            }
  })
</script>

