<template>
    <v-card variant='tonal'>
      <div>
      <h1>Métodos de Pago</h1>
      <br>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="2"
          >
        <v-radio-group>
          <v-radio label="Tarjeta de crédito/debito" value="1"></v-radio>
              <v-row><v-col><v-img
                  :width="40"
                  aspect-ratio="16/9"
                  cover
                  src="https://w7.pngwing.com/pngs/92/785/png-transparent-mastercard-logo-mastercard-credit-card-payment-visa-nyse-ma-mastercard-logo-text-logo-sign-thumbnail.png"
              ></v-img>
              </v-col><v-col><v-img
                  :width="40"
                  aspect-ratio="16/9"
                  cover
                  src="https://cdn.icon-icons.com/icons2/1186/PNG/512/1490135017-visa_82256.png"
              ></v-img>
          </v-col></v-row>
          <v-radio label="PayPal" value="3"></v-radio>
          <v-img
                  :width="40"
                  aspect-ratio="16/9"
                  cover
                  src="https://cdn-icons-png.flaticon.com/512/888/888870.png"
              ></v-img>
          <v-radio label="Transferencia bancaria" value="4"></v-radio>
        </v-radio-group>
  <br>
      <v-btn @click="realizarPago">Realizar Pago</v-btn>
              </v-col>
          </v-row>
      </v-container>
    </div>
    </v-card>
  </template>