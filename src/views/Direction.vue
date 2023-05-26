<template>
    <v-card elevation="18" append-icon="mdi-alert-box" class="mx-auto my-12 px-6 py-8" max-width="60%">
            <v-card-title class="text-left text-h4"> Olvido indicar su direccion!! </v-card-title>
            <v-card-title class="text-left text-h6"> Por favor indique su direccion de envio </v-card-title>
            <v-text-field 
                style="width: 500px; margin-left: 15px;"
                label="Direccion"
                clearable
            ></v-text-field>
            <v-btn
              block
              color="success"
              size="large"
              variant="elevated">
              Continuar
            </v-btn>
        </v-card>
</template>