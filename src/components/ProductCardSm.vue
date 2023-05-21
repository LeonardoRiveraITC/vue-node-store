<template>
    <v-container>
        <v-card
            class="mx-auto"
            max-width="500" 
            max-height="600" 
            > 
            <v-row no-gutters>
                <v-col>
                    <v-card-text>
                        <div>{{product.seller}}</div>
                        <p class="text-h4 text--primary">
                        {{product.name}} 
                        </p>    
                        <v-rating
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
                            variant="text"
                            color="blue"
                            @click=""
                            >
                            Añadir a la cesta 
                        </v-btn>
                    </v-card-actions>
                </v-col>
                <v-col>
                    <v-avatar
                        class="ma-3"
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
const props = defineProps({
product: {},
})
let rate=ref(props.product.rev);
</script>

