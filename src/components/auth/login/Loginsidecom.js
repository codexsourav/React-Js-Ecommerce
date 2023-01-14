import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/login.module.css";

function Loginsidecom({ type }) {
  return (
    <div className={styles.sidecontent} data-aos="fade-down">
      <img className={styles.sitelogo} src="/images/logo.png" alt="sb store" />
      <p className={styles.sitedes}>
        Online Shopping India | Buy Mobiles, Electronics, Appliances, Clothing
        and More Online at SBShop.com
      </p>
      <br />
      {type === "login" ? (
        <p className={styles.noaccount}>
          Don`t Have A Account
          <Link to="/signup">Signup Now</Link>
        </p>
      ) : (
        <p className={styles.noaccount}>
          Alrady Have A Account
          <Link to="/login">Login</Link>
        </p>
      )}
    </div>
  );
}

export default Loginsidecom;
