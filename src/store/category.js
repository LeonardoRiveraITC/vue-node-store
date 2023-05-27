import { defineStore } from 'pinia'
import axios from 'axios'
export const useCategoryStore = defineStore('category', {
    state: () => ({ 
        category: [],
    }),
    getters: {},
    actions: { 
        async fillCategoryList(){
            if(this.category.length<=0){
            let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/categorias' 
            let data
            this.category = []
              await axios.get(url).then(function(res){
                   data = res.data
               })
            this.category=data
            }
        },
    }
});