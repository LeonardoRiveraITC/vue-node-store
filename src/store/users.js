import { defineStore } from 'pinia'
import axios from 'axios'
export const useUsersStore = defineStore('user', {
    state: () => ({ 
        user: [],
        useredit: {},
    }),
    getters: {},
    actions: { 
        async fillUserList(){
            if(this.user.length<=0){
            let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/usuarios' 
            let data
            this.user = []
              await axios.get(url).then(function(res){
                   data = res.data
               })
            this.user=data
            }
        },
        async addUser(useredit){
            let method = "post"
            let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/usuarios' 
            let id = this.user.id
            let data = {
                fields: this.user
            }

            if(id){
                method = "patch"
                url = import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/usuarios/:id' 
            }
            await axios[method](url, data).then(function(res){
                if(res.data && res.data.id){
                    useredit.id = res.data.id
                    if(!id){
                        this.user.push(useredit)
                    }
                    useredit = {}
                }
            })
        },
    }
});