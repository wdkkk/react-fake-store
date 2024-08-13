import ProductsList from "../../components/ProductsList/ProductsList";
import s from "./Main.module.scss";

const Main = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>Check new products</div>

      <ProductsList category="electronics" title="Electronics" />
      <ProductsList category="jewelery" title="Jewelery" />
      <ProductsList category="men's clothing" title="Men's clothing" />
      <ProductsList category="women's clothing" title="Women's clothing" />
    </div>
  );
};

export default Main;
