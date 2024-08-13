import s from "./CartProductCard.module.scss";

import { Product } from "../../types";

import { useDispatch } from "react-redux";
import { cartSlice } from "../../reducers/cart";

type Props = {
  product: Product;
  index: number;
};

const CartProductCard = ({ product, index }: Props) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    const obj = {
      index: index,
      price: product.price,
    };

    dispatch(cartSlice.actions.removeProduct(obj));
  };

  return (
    <div className={s.wrapper}>
      <div className={s.img}>
        <img src={product.image} />
      </div>

      <div className={s.text}>{product.title}123</div>

      <div className={s.deleteButton} onClick={() => deleteProduct()}>
        <div className={s.deleteButtonElement}></div>
        <div className={s.deleteButtonElement}></div>
      </div>
    </div>
  );
};

export default CartProductCard;
