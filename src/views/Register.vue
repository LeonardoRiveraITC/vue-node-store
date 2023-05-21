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
          v-model="password"
          type="password"
          :rules="[required]"
          clearable
          label="Password">
        </v-text-field>

        <v-text-field
          v-model="password"
          type="password"
          :rules="[required]"
          clearable
          label="Password">
        </v-text-field>

        <v-text-field
          v-model="password"
          type="password"
          :rules="[required]"
          clearable
          label="Password">
        </v-text-field>
        <br>

        <v-btn
         :disabled="!form"
          @click="login"
          block
          color="success"
          size="large"
          variant="elevated">
          Sign In
        </v-btn>
      </v-form>
      <a class="text-subtitle-1">¿Ya tienes una cuenta?</a><router-link class="text-blue text-subtitle-1" to="login"> Inicia sesión </router-link>
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
const name=ref('');
const phone=ref('');
const city=ref('');
const state=ref('');
const postalCode=ref('');
const direction=ref('');
const form=ref(false);
const required = (v) =>{return !!v || 'Field is required'}
const userStore=useUserStore();
const login=()=>{
  console.log(user.value)
  userStore.login(user.value);
  router.push({ name: 'home'})
}
</script>
