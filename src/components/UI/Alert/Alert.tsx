import { ReactNode } from "react";
import s from "./Alert.module.scss";

type Props = {
  type: "Default" | "Error";
  children: ReactNode;
};

const Alert = ({ type, children }: Props) => {
  console.log(s.alert);
  return (
    <div className={s.wrapper}>
      {type === "Default" ? (
        <div className={`${s.alert} ${s.default}`}>{children}</div>
      ) : (
        <div className={`${s.alert} ${s.error}`}>{children}</div>
      )}
    </div>
  );
};

export default Alert;
