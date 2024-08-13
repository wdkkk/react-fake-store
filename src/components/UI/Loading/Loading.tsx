import s from "./Loading.module.scss";

const Loading = ({ ...props }) => {
  return (
    <div className={s.wrapper} {...props}>
      <img className={s.img} src="/src/assets/Loading.svg" alt="" />
    </div>
  );
};

export default Loading;
