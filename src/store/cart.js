import { defineStore } from 'pinia'
export const useCartStore = defineStore('cart', {
    state: () => ({ 
        items: [],
    }),
    getters: {
        getItemsNumber: (state) => state.items.length || 0,
    },
    //[id:{data}]
    actions: {
        addCartItem(item){
            if(this.items.length<1){
                item = {item,amount:1};
                this.items.push(item);

            }else{

                this.items.forEach((el,index) => {
                    if(el.id===item.id){
                        this.items[index].amount +=1 
                    }else{
                        item={item,amount:1}
                        this.items.push(item);
                    }
                });
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
            this.items.delete(index);
        },
        emptyCar(){
            this.items=[]
        },
    }
});
