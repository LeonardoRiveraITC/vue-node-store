import { defineStore } from 'pinia'
import axios from 'axios'
export const useUsersStore = defineStore('users', {
    state: () => ({ 
        user: [],
        useredit: {},
    }),
    getters: {},
    actions: { 
        editUser(user){
        let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/usuarios/'+user.id
        axios.put(url,{
            nombre_usu:user.nombre_usu,
            apellidos_usu:user.apellidos_usu,
            telefono:user.telefono,
            ciudad:user.ciudad,
            estado:user.estado,
            direccion:user.direccion,
            codigo_postal:user.codigo_postal,
            id_rol:2,
            email:user.email,
            password:user.password,

        }).then(res=>{
            this.username=res.data.nombre_usu
            this.firstName=res.data.nombre_usu
            this.lastName=res.data.apellidos_usu
            this.email=res.data.email
            this.phone=res.data.telefono
            this.city=res.data.ciudad
            this.state=res.data.state
            this.dir=res.data.direccion
            this.cp=res.data.codigo_postal
            this.role=res.data.id_rol
        })
    },
        deleteUser(id){
            let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/usuarios/'+id 
               axios.delete(url).then(function(res){
               })
        },
        async fillUserList(){
            let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/usuarios' 
            let data
            this.user = []
              await axios.get(url).then(function(res){
                   data = res.data
               })
            this.user=data
        },
        async addUser(user){
            console.log(user)
        let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/usuarios' 
        axios.post(url,{
            nombre_usu:user.nombre_usu,
            apellidos_usu:user.apellidos_usu,
            telefono:user.telefono,
            ciudad:user.ciudad,
            estado:user.estado,
            direccion:user.direccion,
            codigo_postal:user.codigo_postal,
            id_rol:2,
            email:user.email,
            password:user.password,

        }).then(res=>{
            this.username=res.data.nombre_usu
            this.firstName=res.data.nombre_usu
            this.lastName=res.data.apellidos_usu
            this.email=res.data.email
            this.phone=res.data.telefono
            this.city=res.data.ciudad
            this.state=res.data.state
            this.dir=res.data.direccion
            this.cp=res.data.codigo_postal
            this.role=res.data.id_rol
        })
    },
    }
});
