<template>
    <v-card elevation="18" append-icon="mdi-account" class="mx-auto my-12 px-6 py-8" max-width="50%">
          <v-form
            v-model="form"
            @submit.prevent="onSubmit">
            
            <v-text-field
              v-model="email"
              :rules="[required]"
              class="mb-2"
              clearable
              label="Email"> 
            </v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              :rules="[required]"
              clearable
              label="Password">
            </v-text-field>
            <v-text-field
              v-model="number"
              type="phone"
              :rules="[required]"
              clearable
              label="Telefono">
            </v-text-field>
            <v-text-field
              v-model="firstName"
              type="phone"
              :rules="[required]"
              clearable
              label="Nombre">
            </v-text-field>
            <v-text-field
              v-model="lastName"
              type="phone"
              :rules="[required]"
              clearable
              label="Apellidos">
            </v-text-field>
            <v-btn
             :disabled="!form"
              @click="login"
              block
              color="success"
              size="large"
              variant="elevated">
              Guardar cambios
            </v-btn>
          </v-form>
        </v-card> 
    </template>
    
    <script setup>
    import {ref,computed} from 'vue';
    import {useUserStore} from '@/store/user.js'
    import { useRouter, useRoute } from 'vue-router'
    //router methods
    const router = useRouter()
    const route = useRoute()
    //state methods
    const email=ref('');
    const password=ref('');
    const lastName=ref('');
    const firstname=ref('');
    const phone=ref('');
    const form=ref(false);
    const required = (v) =>{return !!v || 'Field is required'}
    const userStore=useUserStore();
    const login=()=>{
      userStore.login(user.value);
      router.push({ name: 'home'})
    }
    </script>
    