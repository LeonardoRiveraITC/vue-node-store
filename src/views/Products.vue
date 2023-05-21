<template>
<v-container>
        <ProductCardSm v-for="item in product" :product="item" />
</v-container>
</template>

<script setup>
import ProductCardSm from '@/components/ProductCardSm.vue'

const product=[{name:"Flipper zero",desc:"Flipper Zero Rev2",rev:"5",img:"https://m.media-amazon.com/images/I/51xPGmiNQGL._AC_SX679_.jpg",seller:"Amazon basics"},
{name:"Flipper zero",desc:"Flipper Zero Rev2",rev:"5",img:"https://m.media-amazon.com/images/I/51xPGmiNQGL._AC_SX679_.jpg",seller:"Amazon basics"},
{name:"Flipper zero",desc:"Flipper Zero Rev2",rev:"5",img:"https://m.media-amazon.com/images/I/51xPGmiNQGL._AC_SX679_.jpg",seller:"Amazon basics"},
]
</script>

