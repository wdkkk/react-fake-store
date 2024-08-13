import axios from "axios";
import { Product } from "../types";

export async function fetchProducts():Promise<Product[]> {
  const res = await axios('https://fakestoreapi.com/products')
  

  return res.data
} 
