import { defineStore } from 'pinia'
export const useCartStore = defineStore('cart', {
  state: () => ({ 
    items: new Map,  
   }),
  getters: {
    getItemsNumber: (state) => state.items.length || 0,
  },
  actions: {
    addCarItem(item){
      this.items.set(this.getItemsNumber+1,item);
    },
    deleteCarItem(index){
      this.items.delete(index);
    },
    emptyCar(){
      this.items=[]
    },
  }
});
