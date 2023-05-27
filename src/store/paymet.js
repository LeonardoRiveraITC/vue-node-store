import { defineStore } from 'pinia'
import axios from 'axios'
export const usepayMStore = defineStore('payM', {
    state: () => ({ 
        payM: [],
    }),
    getters: {},
    actions: { 
        async fillpayMList(){
            if(this.payM.length<=0){
            let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/metodospago' 
            let data
            this.payM = []
              await axios.get(url).then(function(res){
                   data = res.data
               })
            this.payM=data
            }
        },
    }
});