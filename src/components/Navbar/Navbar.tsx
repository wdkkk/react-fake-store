import { NavLink } from "react-router-dom";
import s from "./Navbar.module.scss";

const Navbar = () => {
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
          to="/user"
        >
          Account
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
