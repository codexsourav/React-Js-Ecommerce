import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/offercard.module.css";
function Offer1() {
  return (
    <div className={styles.offercart1} data-aos="fade-right">
      <div className={styles.content}>
        <h2 className={styles.offertitle}>SPECIAL LIMITED TIME OFFER</h2>
        <h1 className={styles.offerinfo}>50% OFF On New Smart Phones</h1>
        <div className={styles.shopbtnwrapper}>
          <Link to="/" className={styles.shpbtn}>
            Shop
          </Link>
        </div>
      </div>
      <div className={styles.imgsec}>
        <img src="/images/phone.png" alt="Iphone10" />
      </div>
    </div>
  );
}

export default Offer1;
