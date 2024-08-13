import { useEffect, useState } from "react";
import s from "./ProductDisplay.module.scss";

import Button from "../../components/UI/Button/Button";

import { useParams } from "react-router";
import { Product } from "../../types";
import Loading from "../../components/UI/Loading/Loading";
import axios from "axios";
import { useNavigate } from "react-router";

const ProductDisplay = () => {
  const params = useParams();
  const navigate = useNavigate();
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
              <Button onClick={() => navigate(-1)}>← Go back</Button>
            </div>
            <div className={s.image}>
              <img src={product.image} alt="" />
            </div>

            <div className={s.text}>
              <div className={s.title}>{product.title}</div>
              <div className={s.desc}>{product.description}</div>

              <div className={s.buttonWrapper}>
                <Button onClick={() => {}}>{product.price}$</Button>
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
