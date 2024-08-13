import s from "./TextField.module.scss";

const TextField = ({ ...props }) => {
  return <input className={s.input} type="text" {...props} />;
};

export default TextField;
