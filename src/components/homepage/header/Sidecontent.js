import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/header.module.css";
function Sidecontent() {
  return (
    <div className={styles.sidecontent} data-aos="fade-right">
      <h1 className={styles.headertitle}>Discover Smartphones & Accessories</h1>
      <p className={styles.headerdes}>
        Browse our store to find new collections of smartphones, laptops and
        other electronics and accessories at the best prices.
      </p>

      <div className={styles.shopbtn}>
        <Link to="/shop" className={styles.btnshop}>
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default Sidecontent;
