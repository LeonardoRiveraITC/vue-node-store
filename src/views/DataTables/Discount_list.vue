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
                      v-model="editedItem.Descuento"
                      label="Descuento"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.Dias_validez"
                      label="Dias_validez"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-combobox
                    v-model="editedItem.Activo"
                      label="Activo"
                      :items="['Si', 'No']"
                    ></v-combobox>
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
                color="blue-darken-1"
                variant="text"
                @click="save"
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
              <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">Borrar</v-btn>
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
        @click="editItem(item.raw)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        size="small"
        @click="deleteItem(item.raw)"
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
const dialogDelete = ref(false)
const headers = [
  { title: 'Id_cupon', key: 'id'},
  { title: 'Descuento', key: 'descuento' },
  { title: 'Dias_validez', key: 'dias_validez' },
  { title: 'Activo', key: 'activo' },
  { title: 'Actions', key: 'actions', sortable: false },
]

onMounted(() => {
  discountStore.fillDiscountList();
})

const editedIndex = ref(-1)
const editedItem = ref({
  id_cupon: '',
  Descuento: '',
  Dias_validez: '',
  Activo: ''
})
const defaultItem = ref({
  id_cupon: '',
  Descuento: '',
  Dias_validez: '',
  Activo: ''
})

const formTitle = computed(() => {
  return editedIndex.value === -1 ? 'Nuevo descuento' : 'Editar descuento'
})

const editItem = (item) => {
  editedIndex.value = discount.value.indexOf(item)
  editedItem.value = { ...item }
  dialog.value = true
}

const deleteItem = (item) => {
  editedIndex.value = discount.value.indexOf(item)
  editedItem.value = { ...item }
  dialogDelete.value = true
}

const deleteItemConfirm = () => {
  discount.value.splice(editedIndex.value, 1)
  closeDelete()
}

const close = () => {
  dialog.value = false
  editedItem.value = { ...defaultItem.value }
  editedIndex.value = -1
}

const closeDelete = () => {
  dialogDelete.value = false
  editedItem.value = { ...defaultItem.value }
  editedIndex.value = -1
}

const save = () => {
  if (editedIndex.value > -1) {
    Object.assign(discount.value[editedIndex.value], editedItem.value)
  } else {
    discount.value.push(editedItem.value)
  }
  close()
}
</script>