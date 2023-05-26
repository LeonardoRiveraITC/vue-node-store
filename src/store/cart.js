import { defineStore } from 'pinia'
export const useCartStore = defineStore('cart', {
    state: () => ({ 
        items: [],
        total: 0
    }),
    getters: {
        getTotalPrice: (state) => { 
                let total=0; 
                state.items.forEach(el=>{
                total+=el.amount*el.item.precio
        })
            return total;
        },
        getItemsNumber: (state) => state.items.length || 0,
    },
    //[id:{data}]
    actions: {
        addCartItem(item){
            let ind
            this.items.forEach((el,index)=>{
                if(el.item.id==item.id){
                     ind=index
                }
            })
            if (ind !=undefined){
                this.items[ind].amount+=1
            }else{
                item = {item,amount:1};
                this.items.push(item);
            }
        },
        removeCardItem(item){
            this.items.forEach((el,index) =>{
                if(index==item.id){
                    if( this.items[index].amount >1  ){
                        this.items[index].amount -= 1  
                    }
                }
            })
        },
        deleteCarItem(index){
            this.items.splice(index,1)
        },
        emptyCar(){
            this.items=[]
        },
    }
});
