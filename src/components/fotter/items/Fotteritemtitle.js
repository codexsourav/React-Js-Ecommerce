import React from "react";
import styles from "../css/Fotteritemtitle.module.css";
function Fotteritemtitle({ title }) {
  return (
    <div className={styles.Fotteritemtitle}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}

export default Fotteritemtitle;
