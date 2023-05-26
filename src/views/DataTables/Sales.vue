<template>
  <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
  />
  
  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="salesStore.sales"
    item-value="name"
    class="elevation-1"
  ></v-data-table>

</template>

<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Colors } from 'chart.js'
import { onMounted } from 'vue';
import { useSalesStore } from '@/store/sales.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Colors)

const salesStore = useSalesStore();

const headers = [
  { title: 'Id_orden_compra', key: 'id'},
  { title: 'Fecha', key: 'fecha' },
  { title: 'Total', key: 'total' },
  { title: 'Direccion', key: 'a_domicilio' },
  { title: 'Direccion', key: 'direccion' },
  { title: 'Clave_compra', key: 'clave_compra' },
  { title: 'Id_usuario', key: 'id_usuario' },
  { title: 'Id_cupon', key: 'id_cupon' },
  { title: 'Id_metodop', key: 'id_metodop' }
]

onMounted(() => {
  salesStore.fillSalesList();
})

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
