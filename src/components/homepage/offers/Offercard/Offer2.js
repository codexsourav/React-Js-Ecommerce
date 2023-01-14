import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/offercard.module.css";

function Offer2() {
  return (
    <div className={styles.offercart2} data-aos="fade-left">
      <div className={styles.content}>
        <h2 className={styles.offertitle}>COMING SOON</h2>
        <h1 className={styles.offerinfo}>TWS Earbuds</h1>
        <div className={styles.shopbtnwrapper}>
          <Link to="/" className={styles.shpbtn}>
            Read More
          </Link>
        </div>
      </div>
      <div className={styles.imgsec}>
        <img src="/images/headphone.png" alt="Iphone10" />
      </div>
    </div>
  );
}

export default Offer2;
