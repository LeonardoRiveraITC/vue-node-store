<template>
<v-card elevation="18" append-icon="mdi-account" class="mx-auto my-12 px-6 py-8" max-width="50%">
      <v-form
        v-model="form"
       > 
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
          v-model="phone"
          :rules="[required]"
          clearable
          label="Telefono">
        </v-text-field>
        <v-text-field
          v-model="firstName"
          :rules="[required]"
          clearable
          label="Nombre">
        </v-text-field>
        <v-text-field
          v-model="lastName"
          :rules="[required]"
          clearable
          label="Apellidos">
        </v-text-field>
        <v-text-field
          v-model="city"
          :rules="[required]"
          clearable
          label="ciudad">
        </v-text-field>
        <v-text-field
          v-model="state"
          :rules="[required]"
          clearable
          label="estado">
        </v-text-field>
        <v-text-field
          v-model="dir"
          :rules="[required]"
          clearable
          label="direccion">
        </v-text-field>
        <v-text-field
          v-model="cp"
          :rules="[required]"
          clearable
          label="Codigo postal">
        </v-text-field>
        <v-btn
         :disabled="!form"
          @click="register()"
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
const firstName=ref('');
const phone=ref('');
const city=ref('');
const state=ref('');
const dir=ref('');
const cp=ref('');
const form=ref(false);
const required = (v) =>{return !!v || 'Field is required'}
const userStore=useUserStore();
const login=()=>{
  userStore.login(user.value);
  router.push({ name: 'home'})
}
const register=()=>{
        userStore.register(firstName.value,lastName.value,email.value,password.value,phone.value,city.value,state.value,dir.value,cp.value)
    }
</script>
