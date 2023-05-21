<template>
<v-card
    class="mx-auto"
    max-width="344" 
  >
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
  </v-card>
</template>
<script setup>
import {ref,computed,onMounted} from 'vue';
const props = defineProps({
product: {},
})
</script>

