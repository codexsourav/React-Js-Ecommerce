import React from "react";
import styles from "./css/cart.module.css";

import { BsX } from "react-icons/bs";
import CartItem from "./CartItem";

import { cartvisible } from "../../../services/navbar";
import { useDispatch } from "react-redux";
import Totalcart from "./Totalcart";

function Cart() {
  const dispatch = useDispatch();
  return (
    <div className={styles.cart}>
      <div
        className={styles.sideblank}
        onClick={() => {
          dispatch(cartvisible());
        }}
      ></div>
      <div className={styles.cartitems}>
        <div className={styles.cattitle}>
          <p>Carts</p>
          <span
            className={styles.closebtn}
            onClick={() => {
              dispatch(cartvisible());
            }}
          >
            <BsX />
          </span>
        </div>

        <div className={styles.cartlist}>
          <CartItem />
          <CartItem />
          <Totalcart />
        </div>
      </div>
    </div>
  );
}

export default Cart;
