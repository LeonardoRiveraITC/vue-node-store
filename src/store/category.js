import { defineStore } from 'pinia'
import axios from 'axios'
export const useCategoryStore = defineStore('category', {
    state: () => ({ 
        category: [],
    }),
    getters: {},
    actions: { 
        editCategory(category){
            let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/categorias/'+category.id
            axios.put(url,{
                categoria: category.categoria
            }).then(res=>{
                this.categoryname = res.data.categoria
            })
        },
        deleteCategory(id){
            let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/categorias/'+id 
               axios.delete(url).then(function(res){
               })
        },
        async fillCategoryList(){
            let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/categorias' 
            let data
            this.category = []
              await axios.get(url).then(function(res){
                   data = res.data
               })
            this.category=data
        },
        async addCategory(category){
            console.log(category)
            let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/categorias'
            axios.post(url,{
                categoria:category.categoria,
            }).then(res=>{
                this.categoryname = res.data.categoria
            })
        },
    }
});