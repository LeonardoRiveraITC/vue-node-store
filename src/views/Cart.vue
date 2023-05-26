<template>
    <v-card-title class="text-center text-h4"> Mi carrito </v-card-title>
    <v-card-text v-show="isCarEmpty">Aún no tienes nada en tu carrito :( </v-card-text>
        <v-row v-show="!isCarEmpty" v-for="(item,index) in cartStore.items" :key="index">        
        <v-col cols="6">
            <ProductCardSm    :product="item.item" :enabled="false" />
    </v-col>
    <v-col cols="2" class="d-flex align-center justify-left">
    <v-text-field
             @change="()=>{if(item.amount<=1) item.amount=1}" 
             class="flex align-center justify-left"  
             v-model="item.amount"
             hide-details
             single-line
             type="number"
            />
    </v-col>
    <v-col class="d-flex align-center justify-left">
        <v-btn @click="cartStore.deleteCarItem(index)" class="flex align-center justify-left" icon="mdi-trash-can"><v-icon color="red"></v-icon></v-btn>
    </v-col>
        </v-row>
        <v-col v-show="!isCarEmpty" style="position: fixed; top:30%;left: 70%;" cols="3">
        <v-card >
            <div class="text-center">
                <div v-for="item in cartStore.items">
                   <p>{{item.item.nombre_p}} x {{item.amount}}={{item.amount*item.item.precio}}</p> 
                </div>
                    <p>Total: {{cartStore.total}}</p>
                <v-dialog
                    v-model="dialog"
                    width="auto"
                >
                <template v-slot:activator="{ props }">
                    <v-btn
                        color="primary"
                        v-bind="props"
                    >
                    Realizar compra
                    </v-btn>
                </template>
                    <v-card>
                        <v-card-title class="text-left text-h5"> Resumen compra </v-card-title>
                        <br>
                        <v-card-title class="text-left text-h6"> Total a pagar: </v-card-title>
                        <v-card-title class="text-left text-h6"> Elija metodo de pago </v-card-title>
                        <v-combobox
                            style="width: 200px; margin-left: 15px;"
                            label="Metodo Pago"
                            :items="['Pago con tarjeta', 'Pago en efectivo']"
                        ></v-combobox>
                        <v-card-title class="text-left text-h6"> Indique su direccion de envio </v-card-title>
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
                        Realizar compra
                        </v-btn>
                    </v-card>
                </v-dialog>
            </div>
        </v-card>
        </v-col>
</template>

<script setup>
import ProductCardSm from '@/components/ProductCardSm.vue'
import {useCartStore} from '@/store/cart.js'
import {ref,onMounted,computed} from 'vue'
const cartStore=useCartStore();
const isCarEmpty = computed(()=>{
        return cartStore.items.length > 0  ? false : true 
    })
onMounted(()=>{
})
const dialog = ref(false)
</script>

