<template>
    <v-data-table
      :headers="headers"
      :items="coupons"
      :sort-by="[{ key: 'id', order: 'asc' }]"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>ADMINISTRACIÓN DE CUPONES</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ props }">
              <v-btn color="primary" dark class="mb-2" v-bind="props">
                Nuevo Cupón
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.id" label="ID Cupón"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.discount" label="Descuento"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="close">Cancelar</v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="save">Guardar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">¿Estás seguro de que quieres eliminar este cupón?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancelar</v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon size="small" class="me-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon size="small" @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </template>
  
  <script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        { title: 'ID Cupón', key: 'id', align: 'start', sortable: false },
        { title: 'Descuento', key: 'discount' },
        { title: 'Acciones', key: 'actions', sortable: false },
      ],
      coupons: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        discount: 0,
      },
      defaultItem: {
        id: '',
        discount: 0,
      },
    }),
  
    computed: {
      formTitle() {
        return this.editedIndex === -1 ? 'Nuevo Cupón' : 'Editar Cupón';
      },
    },
  
    watch: {
      dialog(val) {
        val || this.close();
      },
      dialogDelete(val) {
        val || this.closeDelete();
      },
    },
  
    created() {
      this.initialize();
    },
  
    methods: {
      initialize() {
        this.coupons = [
          { id: '1', discount: 75 },
          { id: '2', discount: 50 },
          { id: '3', discount: 45 },
          { id: '4', discount: 30 },
          { id: '5', discount: 20 },
          { id: '6', discount: 10 },
          { id: '7', discount: 5 },
        ];
      },
  
      editItem(item) {
        this.editedIndex = this.coupons.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
      },
  
      deleteItem(item) {
        this.editedIndex = this.coupons.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialogDelete = true;
      },
  
      deleteItemConfirm() {
        this.coupons.splice(this.editedIndex, 1);
        this.closeDelete();
      },
  
      close() {
        this.dialog = false;
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        });
      },
  
      closeDelete() {
        this.dialogDelete = false;
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        });
      },
  
      save() {
        if (this.editedIndex > -1) {
          Object.assign(this.coupons[this.editedIndex], this.editedItem);
        } else {
          this.coupons.push(this.editedItem);
        }
        this.close();
      },
    },
  };
  </script>
  
  <script setup>
    import { VDataTable } from 'vuetify/labs/VDataTable'
  </script>