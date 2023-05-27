import { defineStore } from 'pinia'
import axios from 'axios'
export const usepayMStore = defineStore('payM', {
    state: () => ({ 
        payM: [],
    }),
    getters: {},
    actions: { 
        editpayM(payM){
            let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/metodospago/'+payM.id 
            axios.put(url,{
                metodop:payM.metodop
            }).then(res=>{
                this.payMName=res.data.metodop
            })
        },
        deletepayM(id){
            let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/metodospago/'+id
            axios.delete(url).then(function(res){
            })
        },
        async fillpayMList(){
            let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/metodospago' 
            let data
            this.payM = []
              await axios.get(url).then(function(res){
                   data = res.data
               })
            this.payM=data
        },
        async addpayM(payM){
            let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/metodospago' 
            axios.post(url,{
                metodop:payM.metodop
            }).then(res=>{
                this.payMName=res.data.metodop
            })
        },
    }
});