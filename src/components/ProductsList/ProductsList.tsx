import { ReactNode, useEffect, useState } from "react";

import s from "./ProductsList.module.scss";
import { Product } from "../../types";

import ProductCard from "../ProductCard/ProductCard";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProductsList = (props: { title: string; category: string }) => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      title: "skeleton",
      price: 109.95,
      description: "skeleton",
      category: "skeleton",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 1,
      title: "skeleton",
      price: 109.95,
      description: "skeleton",
      category: "skeleton",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 1,
      title: "skeleton",
      price: 109.95,
      description: "skeleton",
      category: "skeleton",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 1,
      title: "skeleton",
      price: 109.95,
      description: "skeleton",
      category: "skeleton",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 1,
      title: "skeleton",
      price: 109.95,
      description: "skeleton",
      category: "skeleton",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 1,
      title: "skeleton",
      price: 109.95,
      description: "skeleton",
      category: "skeleton",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 1,
      title: "skeleton",
      price: 109.95,
      description: "skeleton",
      category: "skeleton",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 1,
      title: "skeleton",
      price: 109.95,
      description: "skeleton",
      category: "skeleton",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 1,
      title: "skeleton",
      price: 109.95,
      description: "skeleton",
      category: "skeleton",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 1,
      title: "skeleton",
      price: 109.95,
      description: "skeleton",
      category: "skeleton",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${props.category}?limit=10`
      );
      const data = res.data;

      setProducts([...data, ...data, ...data].slice(0, 10));
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.title}>{props.title}</div>

      <Carousel responsive={responsive} draggable={false}>
        {products.map(
          (product: Product): ReactNode => (
            <ProductCard
              isLoading={isLoading}
              key={product.id}
              product={product}
            />
          )
        )}
      </Carousel>
    </div>
  );
};

export default ProductsList;
