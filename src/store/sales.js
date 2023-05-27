import { defineStore } from 'pinia'
import axios from 'axios'
export const useSalesStore = defineStore('sales', {
    state: () => ({ 
        sales: [],
    }),
    getters: {},
    actions: { 
        async fillSalesList(){
            if(this.sales.length<=0){
            let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/ordenes_de_compra' 
            let data
            this.sales = []
              await axios.get(url).then(function(res){
                   data = res.data
               })
            this.sales=data
            }
        },
    }
});