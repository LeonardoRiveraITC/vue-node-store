<template>
    <ProductCardSm :textOnly="true" v-for="items in cartStore.items" :key="n"/>
</template>

<script setup>
import ProductCardSm from '@/components/ProductCardSm.vue'
import {useCartStore} from '@/store/cart.js'

const cartStore=useCartStore();
</script>

