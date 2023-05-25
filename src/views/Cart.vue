<template>
    <v-card-title class="text-center text-h4"> Mi carrito </v-card-title>
    <v-card-text v-show="isCarEmpty">Aún no tienes nada en tu carrito :( </v-card-text>
        <v-row v-show="!isCarEmpty" v-for="(item,index) in cartStore.items" :key="index">        
        <v-col cols="6">
            <ProductCardSm    :product="item.item" :enabled="false" />
    </v-col>
    <v-col cols="2" class="d-flex align-center justify-left">
    <v-text-field
             class="flex align-center justify-left"  
             v-model="item.amount"
             hide-details
             single-line
              type="number"
            />
    </v-col>
    <v-col class="d-flex align-center justify-left">
        <v-btn @click="cartStore.deleteCarItem(index)" class="flex align-center justify-left" icon="mdi-trash-can"><v-icon color="red"></v-icon></v-btn>
    </v-col>
        </v-row>
        <v-card>
                <div class="text-h5 text--primary">Resumen de compra</div>
        </v-card>
</template>

<script setup>
import ProductCardSm from '@/components/ProductCardSm.vue'
import {useCartStore} from '@/store/cart.js'
import {ref,onMounted,computed} from 'vue'
const cartStore=useCartStore();
const isCarEmpty = computed(()=>{
        return cartStore.items.length > 0  ? false : true 
    })
onMounted(()=>{
})
</script>

