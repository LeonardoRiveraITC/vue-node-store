<template>
  <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
  />
  
  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="Sales"
    item-value="name"
    class="elevation-1"
  ></v-data-table>

</template>

<script setup>
import { ref} from 'vue'
import { VDataTable } from 'vuetify/labs/VDataTable'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Colors } from 'chart.js'
  
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Colors)

const headers = [
  { title: 'Id_orden_compra', key: 'Id_orden_compra'},
  { title: 'Fecha', key: 'Fecha' },
  { title: 'Total', key: 'Total' },
  { title: 'Direccion', key: 'Direccion' },
  { title: 'Clave_compra', key: 'Clave_compra' },
  { title: 'Id_usuario', key: 'Id_usuario' },
  { title: 'Id_vendedor', key: 'Id_vendedor' },
  { title: 'Id_metodop', key: 'Id_metodop' }
]
const Sales = ref([
  {
      Id_orden_compra: '1',
      Fecha: '23-05-2023',
      Total: 298.50,
      Direccion: 'calle #912',
      Clave_compra: 'figX001',
      Id_usuario: '1',
      Id_vendedor: '5',
      Id_metodop: '1'
    }
])

const chartData = {
    labels: [ 'Enero', 'Febrero', 'Marzo', 'Abril',
              'Mayo', 'Junio', 'Julio', 'Agosto',
              'Spetiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
    datasets: [ {
            label: 'Ventas Mensuales', 
            data: [50, 47, 71, 89, 32, 51, 72, 44, 92, 73, 51, 55] } ]
}
const chartOptions = {
    responsive: true,
}
</script>
