import s from "./CartProductCard.module.scss";

import { Product } from "../../types";

const CartProductCard = ({ product }: { product: Product }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.img}>
        <img src={product.image} />
      </div>

      <div className={s.text}>{product.title}123</div>

      <div className={s.deleteButton}>
        <div className={s.deleteButtonElement}></div>
        <div className={s.deleteButtonElement}></div>
      </div>
    </div>
  );
};

export default CartProductCard;
