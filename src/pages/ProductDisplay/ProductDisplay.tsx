import { useEffect, useState } from "react";
import s from "./ProductDisplay.module.scss";

import Loading from "../../components/UI/Loading/Loading";
import Button from "../../components/UI/Button/Button";

import axios from "axios";

import { Product } from "../../types";

import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { cartSlice } from "../../reducers/cart";

const ProductDisplay = () => {
  const dispatcher = useDispatch();
  const navigate = useNavigate();

  const params = useParams();
  const id = params.id;

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      const data = await res.data;

      setProduct(data);
    };

    fetchProduct();
  });

  return (
    <>
      {product !== undefined ? (
        <div className={s.wrapper}>
          <div className={s.row}>
            <div className={s.backButton}>
              <Button onClick={() => navigate("/")}>← Go back</Button>
            </div>
            <div className={s.image}>
              <img src={product.image} alt="" />
            </div>

            <div className={s.text}>
              <div className={s.title}>{product.title}</div>
              <div className={s.desc}>{product.description}</div>

              <div className={s.buttonWrapper}>
                <Button
                  onClick={() => {
                    const cartObject = {
                      product: product,
                      price: product.price,
                    };

                    dispatcher(cartSlice.actions.addProduct(cartObject));
                  }}
                >
                  {product.price}$
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ProductDisplay;
