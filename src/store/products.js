import { defineStore } from 'pinia'
import axios from 'axios'
export const useProductStore = defineStore('product', {
    state: () => ({ 
        product: [],
    }),
    getters: {},
    actions: { 
        editProduct(product){
            let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/productos/'+product.id
            axios.put(url,{
                nombre_p:product.nombre_p,
                descripcion:product.descripcion,
                precio:product.precio,
                imagen:product.imagen,
                id_categoria:product.id_categoria,
                id_vendedor:product.id_vendedor,
            }).then(res=>{
                this.productN=res.data.nombre_p
                this.desc=res.data.descripcion
                this.price=res.data.precio
                this.image=res.data.imagen
                this.category=res.data.id_categoria
                this.seller=res.data.id_vendedor
            }) 
        },
        deleteProduct(id){
            let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/productos/'+id
            axios.delete(url).then(function(res){
            }) 
        },
        async fillItemList(){
            let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/productos' 
            let data
              await axios.get(url).then(function(res){
                   data = res.data
               })
            this.product=data
        },
        async addProduct(product){
            let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/productos'
            axios.post(url,{
                nombre_p:product.nombre_p,
                descripcion:product.descripcion,
                precio:product.precio,
                imagen:product.imagen,
                id_categoria:product.id_categoria,
                id_vendedor:product.id_vendedor,
            }).then(res=>{
                this.productN=res.data.nombre_p
                this.desc=res.data.descripcion
                this.price=res.data.precio
                this.image=res.data.imagen
                this.category=res.data.id_categoria
                this.seller=res.data.id_vendedor
            })
        }
    }
});
