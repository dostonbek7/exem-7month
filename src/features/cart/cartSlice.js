import { createSlice } from "@reduxjs/toolkit";
import { Toast } from "react-toastify/dist/components";

const defaultState={
  cartItems:[],
  numItemsInCart:0,
  cartTotal:0,
  shipping:500,
  tax:0,
  orderTotal:0,
};
const getCartFromLocalStorage = ()=>{
  return JSON.parse(localStorage.getItem('cart')) || defaultState
}
const cartSlice = createSlice({
  name: cart,
  initialState:getCartFromLocalStorage(),
  reducers:{
    addItem: (state,action)=>{
      const {product} = action.payload
      const item = state.cartItems.find((i)=>i.cardID === product.cartID)
      if(item){
        item.amount +=product.amount
      }else{
        state.cartItems.push(product)
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      cartSlice.caseReducers.calculate
    }
  }
})