<template>
  <div class="home">
    <ProductCardSm :product="product" />
  </div>
</template>

<script setup>
import {useUserStore} from '@/store/user.js'
import ProductCardSm from '@/components/ProductCardSm.vue'
//state methods
const product={name:"test",desc:"testdesc",rev:"2"}
const userStore=useUserStore();
</script>
