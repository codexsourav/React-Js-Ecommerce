import React from "react";

import styles from "./css/header.module.css";
import Sidecontent from "./Sidecontent";
function Header() {
  return (
    <div className={styles.header}>
      <Sidecontent />
      <div className={styles.sidelogoimg} data-aos="fade-left">
        <img src="/images/hero.png" alt="headerimage" />
      </div>
    </div>
  );
}

export default Header;
