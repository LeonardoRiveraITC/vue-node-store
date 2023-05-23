<template>
  <v-footer class="footer d-flex flex-column">
    <div class="bg-teal d-flex w-100 align-center px-4">
      <strong>Nuestras redes </strong>

      <v-spacer></v-spacer>

      <v-btn
        v-for="item in icons"
        :key="item"
        class="mx-4"
        :icon="item.icon"
        @click="window.open(item.link)"
        variant="plain"
        size="small"
      ></v-btn>
    </div>

    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>FiguraX</strong>
    </div>
  </v-footer>
</template>

<script setup>
      const icons = [{icon:"mdi-github",link:"https://github.com/LeonardoRiveraITC/"},{icon:"mdi-linkedin",link:"https://www.linkedin.com/in/luis-leonardo-rivera-4a7a03136/"}] 
</script>
