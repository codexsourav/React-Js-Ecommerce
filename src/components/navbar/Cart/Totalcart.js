import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/total.module.css";
function Totalcart() {
  return (
    <div className={styles.total}>
      <h2 className={styles.price}>Total : 340.00 RS</h2>
      <div className={styles.options}>
        <Link to="/">View Cart</Link>
        <Link to="/">Chackout</Link>
      </div>
    </div>
  );
}

export default Totalcart;
