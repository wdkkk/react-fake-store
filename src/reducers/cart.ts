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
    }
  }
})

export default cartSlice.reducer