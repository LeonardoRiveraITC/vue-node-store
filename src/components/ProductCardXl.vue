<template>
    <v-card>
        <v-row>
            <v-col cols="6">
                <v-img class="ma-auto" :src="main" max-height="800" max-width="800"/>
                    <v-sheet
                        class="mx-auto"
                        max-width="800"
                        >
                                <v-img @click="main=items" width="800" height="800" :src="product.imagen"/> 
                    </v-sheet>
            </v-col>
                <v-col class="d-flex align-center justify-center">
                    <v-card-text class="flex align-center justify-center" > 
                        <div class="text-h4 text--primary">{{seller['usuario.nombre_usu']}}</div>
                        <div class="text-h2 text--primary">{{product.nombre_p}}</div>
                        <v-rating
                          size="large"
                          disabled
                          v-model="rate"
                          bg-color="orange-lighten-1"
                          color="green"
                        ></v-rating>
                        <v-spacer></v-spacer>
                        <div class=" text-h2 text--primary">${{product.precio}}</div>
                        <v-textarea
                              v-model="product.descripcion"
                              prepend-icon="mdi-text"
                              disabled="true"
                            ></v-textarea>
                        <v-spacer></v-spacer>
                        <v-btn
                            variant="text"
                            color="blue"
                            @click="cart.addCartItem(product)"
                            >
                            Añadir a la cesta 
                        </v-btn>
                    </v-card-text>
                </v-col>
        </v-row>
    </v-card>
</template>

<script setup>
import {ref,computed,onBeforeMount,onMounted,reactive} from 'vue';
import axios from 'axios';
import {useCartStore} from '@/store/cart.js'
import {useRoute} from 'vue-router'
const cart = useCartStore()
let rate=5;
const route=useRoute()
const product = ref('')
const seller = ref('')
const getProduct=(()=>{
            let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/productos/'+route.params.id 
            axios.get(url).then(res=>{
                product.value=res.data.data.User
                seller.value=res.data.data.Seller
                })
    })
onBeforeMount(()=>{
        getProduct();
    })
</script>

