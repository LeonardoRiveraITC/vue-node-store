<template>
    <v-container>
        <v-card
            > 
            <v-row no-gutters>
                <v-col>
                    <v-card-text>
                        <div>{{product.seller}}</div>
                        <p class="text-h4 text--primary">
                        {{product.name}} 
                        </p>    
                        <v-rating
                           size="x-small"
                          disabled
                          v-model="rate"
                          bg-color="orange-lighten-1"
                          color="green"
                        ></v-rating>
                        <div class="text--primary">
                            {{product.desc}}
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            :v-show="textOnly"
                            variant="text"
                            color="blue"
                            @click="cartStore.addCartItem(product)"
                            >
                            Añadir a la cesta 
                        </v-btn>
                    </v-card-actions>
                </v-col>
                <v-col>
                    <v-avatar
                        size="125"
                        rounded="0"
                        >
                        <v-img :src="product.img"></v-img>
                    </v-avatar>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>
<script setup>
import {ref,computed,onMounted} from 'vue';
import {useCartStore} from '@/store/cart.js'

const cartStore=useCartStore
const props = defineProps({
product: {},
textOnly: false,
})
let rate=ref(props.product.rev);
</script>

