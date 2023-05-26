import { defineStore } from 'pinia'
import axios from 'axios'
export const useProductStore = defineStore('product', {
    state: () => ({ 
        product: [],
    }),
    getters: {},
    actions: { 
        async fillItemList(){
            if(this.product.length<1){
            let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/productos' 
            let data
              await axios.get(url).then(function(res){
                   data = res.data
               })
            this.product=data
            }
        },
    }
});
