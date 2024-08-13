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
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${props.category}?limit=10`
      );
      const data = res.data;

      setProducts([...data, ...data, ...data].slice(0, 10));
    };

    fetchProducts();
  }, []);
  return (
    <div className={s.wrapper}>
      <div className={s.title}>{props.title}</div>
      {products ? (
        <Carousel responsive={responsive} draggable={false}>
          {products.map(
            (product: Product): ReactNode => (
              <ProductCard key={product.id} product={product} />
            )
          )}
        </Carousel>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProductsList;
