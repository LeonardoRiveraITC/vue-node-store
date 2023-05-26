<template>
    <v-container>
        <v-card 
           @click="toPage(product.id)"> 
            <v-row no-gutters>
                <v-col> 
                    <v-card-text>
                        <div>{{product.seller}}</div>
                        <p class="text-h4 text--primary">
                        {{product.nombre_p}} 
                        </p>    
                        <v-rating
                           size="x-small"
                          disabled
                          v-model="rate"
                          bg-color="orange-lighten-1"
                          color="green"
                        ></v-rating>
                        <div class=" text-h5 text--primary">
                            $ {{product.precio}}
                        </div>
                        <div class="text--primary">
                            {{product.descripcion}}
                        </div>
                    </v-card-text>
                </v-col>
                <v-col>
                    <v-avatar
                        size="125"
                        rounded="0"
                        >
                        <v-img :src="product.imagen"></v-img>
                    </v-avatar>
                </v-col>
            </v-row>
        </v-card>
        <v-card>
                    <v-card-actions v-show="props.enabled">
                        <v-btn
                            variant="text"
                            color="blue"
                            @click="cartStore.addCartItem(product)"
                            >
                            Añadir a la cesta 
                        </v-btn>
                    </v-card-actions>
        </v-card>
    </v-container>
</template>
<script setup>
import {ref,computed,onMounted} from 'vue';
import {useCartStore} from '@/store/cart.js'
import { useRouter,useRoute } from 'vue-router';
const cartStore=useCartStore()
const router = useRouter();
const props = defineProps({
enabled: Boolean,
product: {}, 
})
//let rate=ref(props.product.rev);
let rate = 5;
onMounted(()=>{console.log(props.enabled)})
const toPage=(idProd)=>{
  router.push({ name: 'product', params:{id:idProd}})
}
</script>

