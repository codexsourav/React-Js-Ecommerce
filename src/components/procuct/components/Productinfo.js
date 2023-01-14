import React from "react";
import { Link } from "react-router-dom";
import Cartcounter from "./Cartcounter";
import styles from "../css/Productinfo.module.css";
function Productinfo() {
  return (
    <div className={styles.Productinfo} data-aos="fade-left">
      <h1 className={styles.title}>
        boAt Airdopes 172 True Wireless Earbuds with ENx™ Tech, Beast Mode, 35H
        Playtime, 11mm Drivers, ASAP™ Charge, IPX4, IWP™, Touch Controls(Cosmic
        Maroon
      </h1>
      <div className={styles.priceboxabout}>
        <div className={styles.pricesec}>
          <span className={styles.discount}>discount</span>
          <h2 className={styles.desprice}>
            <span className={styles.disper}> -57% </span>{" "}
            <span className={styles.rssell}> ₹1,299</span>
          </h2>
          <p className={styles.mrp}>MRP : ₹2999.00</p>
        </div>
        <Cartcounter />
      </div>

      <div className={styles.buycartbtns}>
        <Link to="/" className={styles.buybtn}>
          Buy Now
        </Link>
        <Link to="/" className={styles.cartbtn}>
          Add To Cart
        </Link>
      </div>
    </div>
  );
}

export default Productinfo;
