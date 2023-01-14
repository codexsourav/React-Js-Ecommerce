import React from "react";
import styles from "../css/Cartcounter.module.css";
function Cartcounter() {
  return (
    <div className={styles.Cartcounter}>
      <button className={styles.btns}>+</button>
      <p className={styles.count}>0</p>
      <button className={styles.btns}>-</button>
    </div>
  );
}

export default Cartcounter;
