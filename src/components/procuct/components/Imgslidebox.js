import React from "react";
import styles from "../css/Imgslidebox.module.css";
function Imgslidebox() {
  return (
    <div className={styles.Imgslidebox}>
      <img src="/images/hero.jpg" alt="Heroimg" className={styles.imgmain} />
    </div>
  );
}

export default Imgslidebox;
