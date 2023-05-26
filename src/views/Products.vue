<template>
<v-container>
    <v-row>
    <v-col cols=4 v-for="item in productStore.product" >
        <ProductCardSm :enabled="true" :product="item" />
    </v-col>   
    </v-row>
</v-container>
</template>

<script setup>
import {onMounted} from 'vue';
import ProductCardSm from '@/components/ProductCardSm.vue'
import {useCartStore} from '@/store/cart.js'
import {useProductStore} from '@/store/products.js'

const cartStore=useCartStore();
const productStore=useProductStore();
onMounted(()=>{
        productStore.fillItemList()
    })
//const product=[{price:100,id:1,name:"Flipper zero",desc:"Flipper Zero Rev2",rev:"5",img:"https://m.media-amazon.com/images/I/51xPGmiNQGL._AC_SX679_.jpg",seller:"Amazon basics"},

</script>

