<template>
  <v-data-table
    :headers="headers"
    :items="userStore.user"
    :sort-by="[{ key: 'id_user', order: 'asc' }]"
    class="elevation-1"
  >
  <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Lista Usuarios</v-toolbar-title>
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
              Añadir usuario
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
                      v-model="editedItem.nombre_usu"
                      label="Nombre"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.apellidos_usu"
                      label="Apellidos"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.password"
                      label="Password"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.email"
                      label="Email"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.telefono"
                      label="Telefono"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.ciudad"
                      label="Ciudad"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.estado"
                      label="Estado"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.direccion"
                      label="Direccion"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.codigo_postal"
                      label="Codigo Postal"
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
                @click="editUser(editedItem)"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog  max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Seguro que deseas borrar este usuario?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancelar</v-btn>
              <v-btn color="blue-darken-1" variant="text" click="deleteUser(editedItem.id)">Borrar</v-btn>
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
        @click="deleteUser(item.raw.id)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script setup>
import { ref, computed, onUpdated} from 'vue'
import { VDataTable } from 'vuetify/labs/VDataTable'
import { onMounted } from 'vue';
import { useUsersStore } from '@/store/users.js';

const userStore = useUsersStore();
const dialog = ref(false)

const headers = [
  { title: 'Id_usuario', key: 'id'},
  { title: 'Nombre', key: 'nombre_usu' },
  { title: 'Apellidos', key: 'apellidos_usu' },
  { title: 'Password', key: 'password' },
  { title: 'Email', key: 'email' },
  { title: 'Telefono', key: 'telefono' },
  { title: 'Ciudad', key: 'ciudad' },
  { title: 'Estado', key: 'estado' },
  { title: 'Direccion', key: 'direccion' },
  { title: 'Codigo Postal', key: 'codigo_postal' },
  { title: 'Actions', key: 'actions', sortable: false },
]

onMounted(() => {
  userStore.fillUserList();
})

const editMode=ref(false)
const editedIndex = ref(-1)
let editedItem = ref({})

const formTitle = computed(() => {
  return editedIndex.value === -1 ? 'Nuevo usuario' : 'Editar usuario'
})

const showDialog = (item) => {
  editedItem = item ||{}
  dialog.value = true
}

const clean = () =>{
    editedItem=[]
}

const save = (editedItem) =>{
  userStore.addUser(editedItem)
  setTimeout(() => {userStore.fillUserList()},1500);
  close()
}
const deleteUser = (id) =>{
  userStore.deleteUser(id)
  setTimeout(() => {userStore.fillUserList()},1500);
  close()
}
const editUser = (editedItem) =>{
  userStore.editUser(editedItem)
  setTimeout(() => {userStore.fillUserList()},1400);
  close()
}

const close = () => {
  dialog.value = false
  editedIndex.value = -1
}

</script>
