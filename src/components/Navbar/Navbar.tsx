import { NavLink } from "react-router-dom";
import s from "./Navbar.module.scss";

import { useSelector } from "react-redux";
import { State } from "../../types";

const Navbar = () => {
  const authStatus = useSelector(
    (state: State) => state.authenficationSliceReducer.authenficated
  );

  let accountLink;

  if (authStatus) accountLink = "/user";
  else accountLink = "/login";

  return (
    <div className={s.wrapper}>
      <div className={s.linkRow}>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? s.pending : isActive ? s.active : ""
          }
          to="/"
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? s.pending : isActive ? s.active : ""
          }
          to="/cart"
        >
          Cart
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? s.pending : isActive ? s.active : ""
          }
          to={accountLink}
        >
          Account
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
