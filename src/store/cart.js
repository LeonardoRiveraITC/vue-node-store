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
    const index = this.items.indexOf(item.id)
        if(index){
            this.item[index].amount+=1 
        }else{
            this.items.push({item.id:{item}})
        }
    },
    deleteCarItem(index){
      this.items.delete(index);
    },
    emptyCar(){
      this.items=[]
    },
  }
});
