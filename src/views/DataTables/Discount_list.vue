<template>
  <v-data-table
    :headers="headers"
    :items="discountStore.disc"
    :sort-by="[{ key: 'id_cupon', order: 'asc' }]"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Lista Descuentos</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ props }">
            <v-btn
            @click="editMode=false"
              color="primary"
              dark
              class="mb-2"
              v-bind="props"
            >
              Añadir Descuento
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.descuento"
                      label="Descuento"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.dias_validez"
                      label="Dias_validez"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-combobox
                      v-model="editedItem.activo"
                      label="Activo"
                      :items="['true', 'false']"
                    ></v-combobox>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.codigo"
                      label="Codigo"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="close"
              >
                Cancelar
              </v-btn>
              <v-btn
                v-if="!editMode"
                color="blue-darken-1"
                variant="text"
                @click="save(editedItem)"
              >
                Guardar
              </v-btn>
              <v-btn
                v-if="editMode"
                color="blue-darken-1"
                variant="text"
                @click="editDiscount(editedItem)"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Seguro que deseas borrar este descuento?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancelar</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteDiscount(editedItem.id)">Borrar</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        size="small"
        class="me-2"
        @click="editMode=true;showDialog(item.raw)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        size="small"
        @click="deleteDiscount(item.raw.id)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>
 
<script setup>
import { ref, computed } from 'vue'
import { onMounted } from 'vue';
import { VDataTable } from 'vuetify/labs/VDataTable'
import { useDiscountStore } from '@/store/discount.js';

const discountStore = useDiscountStore();
const dialog = ref(false)

const headers = [
  { title: 'Id_cupon', key: 'id'},
  { title: 'Descuento', key: 'descuento' },
  { title: 'Dias_validez', key: 'dias_validez' },
  { title: 'Codigo', key: 'codigo' },
  { title: 'Actions', key: 'actions', sortable: false },
]

onMounted(() => {
  discountStore.fillDiscountList();
})

const editMode=ref(false)
const editedIndex = ref(-1)
let editedItem = ref({})

const formTitle = computed(() => {
  return editedIndex.value === -1 ? 'Nuevo descuento' : 'Editar descuento'
})

const showDialog = (item) => {
  editedItem = item ||{}
  dialog.value = true
}

const clean = () =>{
    editedItem=[]
}

const save = (editedItem) =>{
  discountStore.addDiscount(editedItem)
  setTimeout(() => {discountStore.fillDiscountList()},1500);
  close()
}
const deleteDiscount = (id) =>{
  discountStore.deleteDiscount(id)
  setTimeout(() => {discountStore.fillDiscountList()},1500);
  close()
}
const editDiscount = (editedItem) =>{
  discountStore.editDiscount(editedItem)
  setTimeout(() => {discountStore.fillDiscountList()},1400);
  close()
}

const close = () => {
  dialog.value = false
  editedIndex.value = -1
}

</script>