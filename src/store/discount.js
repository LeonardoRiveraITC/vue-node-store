import { defineStore } from 'pinia'
import axios from 'axios'
export const useDiscountStore = defineStore('disc', {
    state: () => ({ 
        disc: [],
    }),
    getters: {},
    actions: { 
        editDiscount(disc){
            let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/cupones_desc/'+disc.id
            axios.put(url,{
                descuento:disc.descuento,
                dias_validez:disc.dias_validez,
                activo:disc.activo,
                codigo:disc.codigo,
            }).then(res=>{
                this.discount=res.data.descuento
                this.valDay=res.data.dias_validez
                this.active=res.data.activo
                this.code=res.data.codigo
            })
        },
        deleteDiscount(id){
            let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/cupones_desc/'+id
            axios.delete(url).then(function(res){
            }) 
        },
        async fillDiscountList(){
            let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/cupones_desc' 
            let data
            this.disc = []
              await axios.get(url).then(function(res){
                   
                   data = res.data
               })
            this.disc=data
        },
        async addDiscount(disc){
            console.log(disc)
            let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/cupones_desc' 
            axios.post(url,{
                descuento:disc.descuento,
                dias_validez:disc.dias_validez,
                activo:disc.activo,
                codigo:disc.codigo,
            }).then(res=>{
                this.discount=res.data.descuento
                this.valDay=res.data.dias_validez
                this.active=res.data.activo
                this.code=res.data.codigo
            })
        },
    }
});