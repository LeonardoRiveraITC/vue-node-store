<template>
<v-card
    class="mx-auto"
    elevation="13"
    append-icon="mdi-coins"
    max-width="40%"
    >
    <div class="d-flex flex-no-wrap justify-space-between">
            <div class="mx-auto align-self-center"> 
            <v-img  :width="200"  cover
               :src="logo"> 
            </v-img>
            </div>
            <div>
              <v-card-title class="text-h3">
                placeholder
              </v-card-title>

              <v-card-text>
                <p>placeholder</p>
            </v-card-text>
            <v-card-actions >
                <v-col cols="auto">
                    <v-btn>Comprar ahora</v-btn>
                    <v-btn>Añadir a la cesta</v-btn>
                </v-col>     
            </v-card-actions>
            </div> 
            </div>
</v-card>
</template>

<script setup>
import {ref,computed,onMounted,reactive} from 'vue';
import logo from '@/assets/logo.png'; 
</script>

