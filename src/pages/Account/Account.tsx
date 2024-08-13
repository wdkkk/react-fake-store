import Button from "../../components/UI/Button/Button";
import { authenficationSlice } from "../../reducers/authentication";
import { User } from "../../types";
import s from "./Account.module.scss";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

type Props = {
  user: User;
};

const Account = ({ user }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        Welcome,{" "}
        <span>
          {user.name.firstname} {user.name.lastname}
        </span>
        !
      </div>
      <div className={s.description}>Your personal data:</div>
      <div className={s.column}>
        <div className={s.columnElement}>
          <div className={s.columnElementTitle}>Phone:</div>
          <div className={s.columnElementContent}>{user.phone}</div>
        </div>

        <div className={s.columnElement}>
          <div className={s.columnElementTitle}>Address:</div>
          <div className={s.columnElementContent}>
            {user.address.city}, {user.address.street}, {user.address.number},{" "}
            {user.address.zipcode}
          </div>
        </div>
      </div>

      <Button
        onClick={() => {
          dispatch(authenficationSlice.actions.logout());
          navigate("/login");
        }}
      >
        Log out
      </Button>
    </div>
  );
};

export default Account;
