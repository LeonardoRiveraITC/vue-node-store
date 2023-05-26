import { defineStore } from 'pinia'
import axios from 'axios'
export const useDiscountStore = defineStore('disc', {
    state: () => ({ 
        disc: [],
    }),
    getters: {},
    actions: { 
        async fillDiscountList(){
            if(this.disc.length<=0){
            let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/cupones_desc' 
            let data
            this.disc = []
              await axios.get(url).then(function(res){
                   data = res.data
               })
            this.disc=data
            }
        },
    }
});