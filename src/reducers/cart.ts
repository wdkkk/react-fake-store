import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: <Product[]>[],
    totalPrice: <number>0
  },
  reducers: {
    addProduct(state, action: {payload: {product: Product, price: number}}) {
      state.products = [...state.products, action.payload.product]
      state.totalPrice = state.totalPrice + action.payload.price 
    },
    removeProduct(state, action) {
      state.totalPrice = state.totalPrice - action.payload.price
      const tempArr = state.products
      tempArr.splice(action.payload.index, 1)
      state.products = [...tempArr]
    }
  }
})

export default cartSlice.reducer