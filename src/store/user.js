import { defineStore } from 'pinia'
import axios from 'axios'
export const useUserStore = defineStore('user', {
  state: () => ({ 
    username: '',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    city:'',
    state:'',
    dir:'',
    cp:'',
    role:''
   }),
  getters: {
    fullName: (state) => state.firstName+' '+state.lastName,
    getUserName:(state)=>state.username,
    getFirstName:(state)=>state.firstName,
    getLastName:(state)=>state.lastName,
    getLinkedIn:(state)=>state.linkedIn,
    getGithub:(state)=>state.github,
  },
  actions: {
    updateProfile(user,fname,lname,ldin,ghub){
      this.username=user;
      this.firstName=fname;
      this.lastName=lname;
      this.linkedIn=ldin;
      this.github=ghub;
    },
    setGithub(ghub){
      this.github=ghub
    },
    setLinkedin(ldin){
      this.linkedIn=ldin
    },
    setFullName(fname,lname){
      this.fullName=fname;
      this.lastName=lname;
    },
    login(email,pass) {
        let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/login' 
        axios.post(url,{
            email:email,
            password:pass
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
    register(nombre,apellidos,email,pass,phone,city,state,direccion,cp) {
        let url=import.meta.env.VITE_APP_API_HOST+":"+import.meta.env.VITE_APP_API_PORT+'/usuarios' 
        axios.post(url,{
            nombre_usu:nombre,
            apellidos_usu:apellidos,
            telefono:phone,
            ciudad:city,
            estado:state,
            direccion:direccion,
            codigo_postal:cp,
            email:email,
            id_rol:2,
            password:pass
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
    logout(){
      //clean token and userdata
      this.username=''
    }
  },
});
