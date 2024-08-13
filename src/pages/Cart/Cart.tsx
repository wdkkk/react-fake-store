import s from "./Cart.module.scss";

import { useSelector } from "react-redux";

import { State } from "../../types";

import CartProductCard from "../../components/CartProductCard/CartProductCard";

const Cart = () => {
  const cartData = {
    products: useSelector((state: State) => state.cartSliceReducer.products),
    totalPrice: useSelector(
      (state: State) => state.cartSliceReducer.totalPrice
    ),
  };

  return (
    <div className={s.wrapper}>
      <>
        {cartData.products.map((product) => (
          <CartProductCard key={product.id} product={product} />
        ))}
      </>
    </div>
  );
};

export default Cart;
