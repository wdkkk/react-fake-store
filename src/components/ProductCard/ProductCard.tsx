import s from "./ProductCard.module.scss";
import { Product } from "../../types";
import Button from "../UI/Button/Button";

import { useNavigate } from "react-router";

type Props = {
  product: Product;
};

const ProductCard = (props: Props) => {
  const navigate = useNavigate();

  return (
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
  );
};

export default ProductCard;
