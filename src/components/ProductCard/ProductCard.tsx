import s from "./ProductCard.module.scss";
import { Product } from "../../types";
import Button from "../UI/Button/Button";

import "react-loading-skeleton/dist/skeleton.css";

import { useNavigate } from "react-router";

import Skeleton from "react-loading-skeleton";

type Props = {
  product: Product;
  isLoading: boolean;
};

const ProductCard = (props: Props) => {
  const navigate = useNavigate();

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
                console.log("@click");
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
