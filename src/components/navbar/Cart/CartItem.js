import React from "react";
import styles from "./css/cartitem.module.css";
import { RiDeleteBin7Line } from "react-icons/ri";
function CartItem() {
  return (
    <div className={styles.cartitem}>
      <div className={styles.productinfo}>
        <div className={styles.itemimg}>
          <img src="/images/headphone.png" width="60px" alt="product" />
        </div>
        <div className={styles.iteminfo}>
          <p className={styles.itemname}>IPhone 14 Pro Max</p>
          <p className={styles.itemprice}>
            $3507.00 <span>Quantity : 1</span>
          </p>
        </div>
      </div>
      <span className={styles.removebtn}>
        <RiDeleteBin7Line />
      </span>
    </div>
  );
}

export default CartItem;
