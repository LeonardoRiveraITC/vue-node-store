<template>
    <v-container>
        <v-card
            class="mx-auto"
            max-width="350" 
            max-height="400" 
            > 
            <v-row no-gutters>
                <v-col>
                    <v-card-text>
                        <div>Seller</div>
                        <p class="text-h4 text--primary">
                        {{product.name}} 
                        </p>
                        <p>{{product.rev}}</p>
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
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
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
</script>

