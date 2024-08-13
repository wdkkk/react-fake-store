import s from "./ProductCard.module.scss";
import { Product } from "../../types";
import Button from "../UI/Button/Button";

import "react-loading-skeleton/dist/skeleton.css";

import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import Skeleton from "react-loading-skeleton";
import { cartSlice } from "../../reducers/cart";

type Props = {
  product: Product;
  isLoading: boolean;
};

const ProductCard = (props: Props) => {
  const navigate = useNavigate();
  const dispatcher = useDispatch();

  return (
    <>
      {props.isLoading ? (
        <div className={s.wrapper}>
          <Skeleton height={133} />
          <div className={s.title}>
            <Skeleton count={3} />
          </div>

          <div className={s.loadingButtonWrapper}>
            <Skeleton height={38} width={100} />
          </div>
        </div>
      ) : (
        <div
          className={s.wrapper}
          onClick={() => {
            navigate(`/product/${props.product.id}`);
          }}
        >
          <div className={s.img}>
            <img src={props.product.image} />
          </div>
          <div className={s.title}>{props.product.title}</div>

          <div className={s.buttonWrapper}>
            <Button
              onClick={(e) => {
                if (e) e.stopPropagation();
                const cartObject = {
                  product: props.product,
                  price: props.product.price,
                };
                dispatcher(cartSlice.actions.addProduct(cartObject));
              }}
            >
              {props.product.price}$
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
