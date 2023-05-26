<template>
    <v-card elevation="18" append-icon="mdi-alert-box" class="mx-auto my-12 px-6 py-8" max-width="60%">
            <v-card-title class="text-left text-h4"> Olvido indicar su metodo de pago!! </v-card-title>
            <v-card-title class="text-left text-h6"> Por favor indique su metodo de pago </v-card-title>
            <v-combobox
                style="width: 200px; margin-left: 15px;"
                label="Metodo Pago"
                :items="['Pago con tarjeta', 'Pago en efectivo']"
            ></v-combobox>
            <v-btn
              block
              color="success"
              size="large"
              variant="elevated">
              Continuar
            </v-btn>
        </v-card>
</template>