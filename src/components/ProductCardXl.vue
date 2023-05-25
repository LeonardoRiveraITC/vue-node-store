<template>
    <v-card>
        <v-row>
            <v-col cols="6">
                <v-img class="ma-auto" :src="main" max-height="800" max-width="800"/>
                    <v-sheet
                        class="mx-auto"
                        max-width="800"
                        >
                        <v-slide-group 
                            class="ma-auto" 
                            show-arrows
                            >
                            <v-slide-group-item v-for="items in product.images" :key="n"> 
                                <v-img @click="main=items" width="100" height="100" :src="items"/> 
                            </v-slide-group-item> 
                        </v-slide-group>
                    </v-sheet>
            </v-col>
                <v-col class="d-flex align-center justify-center">
                    <v-card-text class="flex align-center justify-center" > 
                        <div class="text-h4 text--primary">{{product.seller}}</div>
                        <p class="text-h3 text--primary">
                        {{product.name}} 
                        </p>    
                        <v-rating
                           size="large"
                          disabled
                          v-model="rate"
                          bg-color="orange-lighten-1"
                          color="green"
                        ></v-rating>
                        <v-spacer></v-spacer>
                        <div class=" text-h2 text--primary">${{product.price}}</div>
                        <v-textarea
                              v-model="product.desc"
                              prepend-icon="mdi-text"
                              disabled="true"
                            ></v-textarea>
                        <v-spacer></v-spacer>
                        <v-btn
                            variant="text"
                            color="blue"
                            @click=""
                            >
                            Añadir a la cesta 
                        </v-btn>
                    </v-card-text>
                </v-col>
        </v-row>
    </v-card>
</template>

<script setup>
    import {ref,computed,onMounted,reactive} from 'vue';
    const product={price:100,name:"Microsoft office license",desc:"ajsudjklashdasjkdlhasdkjlahsdjkashdaskljdhasdjklhasdljkashdasjkldhasjkdhasdlkjashdjklashdaslkjdhasljkda",seller:"Amazon basics",review:"3",images:["https://firebase.google.com/static/images/products/test-lab/test-lab-illo_1x.png?hl=es-419","https://pbs.twimg.com/profile_images/1498641868397191170/6qW2XkuI_400x400.png","https://pbs.twimg.com/profile_images/1498641868397191170/6qW2XkuI_400x400.png","https://firebase.google.com/static/images/products/test-lab/test-lab-illo_1x.png?hl=es-419","https://firebase.google.com/static/images/products/test-lab/test-lab-illo_1x.png?hl=es-419","https://firebase.google.com/static/images/products/test-lab/test-lab-illo_1x.png?hl=es-419","https://firebase.google.com/static/images/products/test-lab/test-lab-illo_1x.png?hl=es-419","https://firebase.google.com/static/images/products/test-lab/test-lab-illo_1x.png?hl=es-419","https://firebase.google.com/static/images/products/test-lab/test-lab-illo_1x.png?hl=es-419","https://firebase.google.com/static/images/products/test-lab/test-lab-illo_1x.png?hl=es-419"]}
    const main = ref(product.images[0]); 
</script>

