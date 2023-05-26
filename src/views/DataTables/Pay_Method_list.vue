<template>
  <v-data-table
    :headers="headers"
    :items="pay_method"
    :sort-by="[{ key: 'Id_metodop', order: 'asc' }]"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Metodos Pago</v-toolbar-title>
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
              Añadir Metodo Pago
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
                  >
                    <v-text-field
                      v-model="editedItem.Metodo_Pago"
                      label="Metodo_Pago"
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
            <v-card-title class="text-h5">Seguro que deseas borrar este metodo de pago?</v-card-title>
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
import { VDataTable } from 'vuetify/labs/VDataTable'

const dialog = ref(false)
const dialogDelete = ref(false)
const headers = [
  { title: 'Id_metodop', key: 'Id_metodop'},
  { title: 'Metodo_Pago', key: 'Metodo_Pago' },
  { title: 'Actions', key: 'actions', sortable: false },
]
const pay_method = ref([
  {
      Id_metodop: '1',
      Metodo_Pago: 'Tarjeta'
    },
])
const editedIndex = ref(-1)
const editedItem = ref({
  Id_metodop: '',
  Metodo_Pago: ''
})
const defaultItem = ref({
  Id_metodop: '',
  Metodo_Pago: ''
})

const formTitle = computed(() => {
  return editedIndex.value === -1 ? 'Nuevo Metodo Pago' : 'Editar Metodo Pago'
})

const editItem = (item) => {
  editedIndex.value = pay_method.value.indexOf(item)
  editedItem.value = { ...item }
  dialog.value = true
}

const deleteItem = (item) => {
  editedIndex.value = pay_method.value.indexOf(item)
  editedItem.value = { ...item }
  dialogDelete.value = true
}

const deleteItemConfirm = () => {
  pay_method.value.splice(editedIndex.value, 1)
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
    Object.assign(pay_method.value[editedIndex.value], editedItem.value)
  } else {
    pay_method.value.push(editedItem.value)
  }
  close()
}
</script>
