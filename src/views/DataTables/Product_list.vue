<template>
  <v-data-table
    :headers="headers"
    :items="productStore.product"
    :sort-by="[{ key: 'Id_producto', order: 'asc' }]"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Lista Productos</v-toolbar-title>
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
              Añadir Producto
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
                      v-model="editedItem.nombre_p"
                      label="Producto"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.descripcion"
                      label="Descripcion"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.precio"
                      label="Precio"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.imagen"
                      label="Imagen"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.id_categoria"
                      label="Id_categoria"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.id_vendedor"
                      label="Id_vendedor"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
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
                @click="editProduct(editedItem)"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Seguro que deseas borrar este producto?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancelar</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteProduct(editedItem.id)">Borrar</v-btn>
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
        @click="deleteProduct(item.raw.id)"
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
import { useProductStore } from '@/store/products.js';

const productStore = useProductStore();
const dialog = ref(false)

const headers = [
  { title: 'Id_producto', key: 'id'},
  { title: 'Producto', key: 'nombre_p' },
  { title: 'Descripcion', key: 'descripcion' },
  { title: 'Precio', key: 'precio' },
  { title: 'Imagen', key: 'imagen' },
  { title: 'Id_categoria', key: 'id_categoria' },
  { title: 'Id_vendedor', key: 'id_vendedor' },
  { title: 'Actions', key: 'actions', sortable: false },
]

onMounted(() => {
  productStore.fillItemList();
})

const editMode=ref(false)
const editedIndex = ref(-1)
let editedItem = ref({})

const formTitle = computed(() => {
  return editedIndex.value === -1 ? 'Nuevo producto' : 'Editar producto'
})

const showDialog = (item) => {
  editedItem = item ||{}
  dialog.value = true
}

const clean = () =>{
    editedItem=[]
}

const save = (editedItem) =>{
  productStore.addProduct(editedItem)
  setTimeout(() => {productStore.fillItemList},1500);
  close()
}
const deleteProduct = (id) =>{
  productStore.deleteProduct(id)
  setTimeout(() => {productStore.fillItemList},1500);
  close()
}
const editProduct = (editedItem) =>{
  productStore.editProduct(editedItem)
  setTimeout(() => {productStore.fillItemList},1400);
  close()
}

const close = () => {
  dialog.value = false
  editedIndex.value = -1
}

</script>