<template>
  <v-data-table
    :headers="headers"
    :items="categoryStore.category"
    :sort-by="[{ key: 'Id_categoria', order: 'asc' }]"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Categorias</v-toolbar-title>
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
              Añadir Categoria
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
                      v-model="editedItem.categoria"
                      label="Categoria"
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
                @click="editCategory(editedItem)"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Seguro que deseas borrar esta categoria?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancelar</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteCategory(editedItem.id)">Borrar</v-btn>
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
        @click="deleteCategory(item.raw.id)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script setup>
import { ref, computed } from 'vue'
import { VDataTable } from 'vuetify/labs/VDataTable'
import { onMounted } from 'vue';
import { useCategoryStore } from '@/store/category.js';

const categoryStore = useCategoryStore();
const dialog = ref(false)

const headers = [
  { title: 'Id_categoria', key: 'id'},
  { title: 'Categoria', key: 'categoria' },
  { title: 'Actions', key: 'actions', sortable: false },
]

onMounted(() => {
  categoryStore.fillCategoryList();
})

const editMode = ref(false)
const editedIndex = ref(-1)
let editedItem = ref({})

const formTitle = computed(() => {
  return editedIndex.value === -1 ? 'Nueva categoria' : 'Editar categoria'
})

const showDialog = (item) => {
  editedItem = item ||{}
  dialog.value = true
}

const clean = () =>{
  editedItem=[]
}

const save = (editedItem) => {
  categoryStore.addCategory(editedItem)
  setTimeout(() => {categoryStore.fillCategoryList()},1500)
  close()
}

const deleteCategory = (id) =>{
  categoryStore.deleteCategory(id)
  setTimeout(() => {categoryStore.fillCategoryList()},1500)
  close()
}

const editCategory = (editedItem) =>{
  categoryStore.editCategory(editedItem)
  setTimeout(() => {categoryStore.fillCategoryList()},1400)
  close()
}

const close = () => {
  dialog.value = false
  editedIndex.value = -1
}
</script>
