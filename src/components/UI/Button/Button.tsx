import { ReactNode } from "react";
import s from "./Button.module.scss";

const Button = ({
  children,
  ...props
}: {
  onClick: (e?: Event) => Promise<void> | void;
  children: ReactNode;
}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.button} {...props}>
        {children}
      </div>
    </div>
  );
};

export default Button;
