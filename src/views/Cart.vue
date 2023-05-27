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
                    <p>Total: {{priceBeforeDiscount}}</p>
                    <p v-if="isCuponValid" >Cupon valido, tienes un {{cartStore.cupones.descuento}} para esta compra. Precio final: {{totalAfterDiscount}} </p> 
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
                <v-text-field
                         label="cupon"  
                         @change="validateCupon()"
                         class="flex align-center justify-left"  
                         v-model="cupon"
                         hide-details
                         single-line
                    />
                </template>
                    <v-card v-if="!isUserLogged">
                        <v-card-title class="text-left text-h5"> Resumen compra </v-card-title>
                        <br>
                        <v-card-title class="text-left text-h6"> Configure metodo de pago </v-card-title>
                        <p>Por su seguridad, no almacenamos esta información en ningún momento y solo la usaremos para procesar el pago </p>
                        <v-combobox
                            v-model="metodo"
                            style="width: 200px; margin-left: 15px;"
                            label="Metodo Pago"
                            :items="['Pago con tarjeta', 'PayPal']"
                        ></v-combobox>
                        <div v-if="metodo=='Pago con tarjeta'">
                        <v-text-field 
                         label="Tarjeta"  
                         class="flex align-center justify-left"  
                         hide-details
                         single-line
                    />
                        <v-text-field 
                         label="Numero de seguridad"  
                         class="flex align-center justify-left"  
                         hide-details
                         single-line
                    />
                    </div>

                        <v-btn
                         v-if="metodo=='PayPal'"
                         label="paypal"
                    />
                        <v-card-title class="text-left text-h6"> Confirme su direccion de envio </v-card-title>
                        <v-text-field 
                            v-model="userStore.dir"
                            style="width: 500px; margin-left: 15px;"
                            label="Direccion"
                            disabled
                        ></v-text-field>
                        <v-btn
                            block
                            @click="cartStore.finishTransaction(userStore.dir,userStore.id,1)"
                            color="success"
                            size="large"
                            variant="elevated">
                        Realizar compra
                        </v-btn>
                    </v-card>
                    <v-card v-if="isUserLogged">
                        <v-card-title class="text-left text-h5"> Para continuar, debes iniciar sesión</v-card-title>
                        <v-btn
                            to="/login"
                            color="success"
                            size="large"
                            variant="elevated">
                        Iniciar sesión
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
import {useUserStore} from '@/store/user.js'
import {ref,onMounted,computed} from 'vue'
const cartStore=useCartStore();
const userStore=useUserStore();
const metodo=ref('');
const totalDesc=ref('');
const validateCupon=()=>{
      cartStore.findCupon(cupon.value)  
    }
const isCarEmpty = computed(()=>{
        return cartStore.items.length > 0  ? false : true 
    })
const isCuponValid = computed(()=>{
        return cartStore.cupones.codigo != undefined ? true:false 
    })
const isUserLogged = computed(()=>{
        return userStore.email != '' ? false:true 
    })
const totalAfterDiscount = computed(()=>{
         cartStore.total=(cartStore.getTotalPrice-(cartStore.getTotalPrice*cartStore.cupones.descuento)/100)
         return (cartStore.getTotalPrice-(cartStore.getTotalPrice*cartStore.cupones.descuento)/100)
    })

const priceBeforeDiscount = computed(()=>{
         cartStore.total=cartStore.getTotalPrice
         return (cartStore.getTotalPrice)
    })
const cupon = ref('');
const dialog = ref(false)
</script>

