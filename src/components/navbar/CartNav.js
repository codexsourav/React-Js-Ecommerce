import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/navbar.module.css";
import { BsCart3, BsList, BsX } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { visible, cartvisible } from "../../services/navbar";
function CartNav() {
  const menusts = useSelector((state) => state.navbar);
  const dispatch = useDispatch();
  return (
    <div className={styles.cartsec}>
      <span
        className={styles.menubar}
        onClick={() => {
          dispatch(visible());
        }}
      >
        {!menusts.value ? <BsList /> : <BsX />}
      </span>
      <div
        className={styles.carico}
        onClick={() => {
          dispatch(cartvisible());
        }}
      >
        <BsCart3 />
        <span className={styles.cartcount}>10</span>
      </div>

      <Link to="/login" className={styles.user}>
        <AiOutlineUser />
      </Link>
    </div>
  );
}

export default CartNav;
