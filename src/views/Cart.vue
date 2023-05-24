<template>
    <v-col cols="6">
        <ProductCardSm :textOnly="true" v-for="item in cartStore.items" :key="n" :product="item.item" />
    </v-col>
</template>

<script setup>
import ProductCardSm from '@/components/ProductCardSm.vue'
import {useCartStore} from '@/store/cart.js'
import {ref,onMounted} from 'vue'
const cartStore=useCartStore();

onMounted(()=>{
})
</script>

