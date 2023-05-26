<template>
  <v-data-table
    :headers="headers"
    :items="users"
    :sort-by="[{ key: 'id_usuario', order: 'asc' }]"
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
                      v-model="editedItem.nombre"
                      label="Nombre"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.apellidos"
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
            <v-card-title class="text-h5">Seguro que deseas borrar este usuario?</v-card-title>
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
  { title: 'Id_usuario', key: 'id_usuario'},
  { title: 'Nombre', key: 'nombre' },
  { title: 'Apellidos', key: 'apellidos' },
  { title: 'Password', key: 'password' },
  { title: 'Email', key: 'email' },
  { title: 'Telefono', key: 'telefono' },
  { title: 'Ciudad', key: 'ciudad' },
  { title: 'Estado', key: 'estado' },
  { title: 'Direccion', key: 'direccion' },
  { title: 'Codigo Postal', key: 'codigo_postal' },
  { title: 'Actions', key: 'actions', sortable: false },
]
const users = ref([
  {
      id_usuario: '1',
      nombre: 'Jorge',
      apellidos: 'Gutierrez',
      password: '1234',
      email: 'jorge@gmail.com',
      telefono: '4611892968',
      ciudad: 'celaya',
      estado: 'guanajuato',
      direccion: 'calle #529',
      codigo_postal: '38010'
    },
])
const editedIndex = ref(-1)
const editedItem = ref({
  id_usuario: '',
  nombre: '',
  apellidos: '',
  password: '',
  email: '',
  telefono: '',
  ciudad: '',
  estado: '',
  direccion: '',
  codigo_postal: ''
})
const defaultItem = ref({
  id_usuario: '',
  nombre: '',
  apellidos: '',
  password: '',
  email: '',
  telefono: '',
  ciudad: '',
  estado: '',
  direccion: '',
  codigo_postal: ''
})

const formTitle = computed(() => {
  return editedIndex.value === -1 ? 'Nuevo usuario' : 'Editar usuario'
})

const editItem = (item) => {
  editedIndex.value = users.value.indexOf(item)
  editedItem.value = { ...item }
  dialog.value = true
}

const deleteItem = (item) => {
  editedIndex.value = users.value.indexOf(item)
  editedItem.value = { ...item }
  dialogDelete.value = true
}

const deleteItemConfirm = () => {
  users.value.splice(editedIndex.value, 1)
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
    Object.assign(users.value[editedIndex.value], editedItem.value)
  } else {
    users.value.push(editedItem.value)
  }
  close()
}
</script>
