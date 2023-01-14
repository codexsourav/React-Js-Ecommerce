import React from "react";
import styles from "./css/Lightitem.module.css";

function LightItem({ title, desc, icon }) {
  return (
    <div className={styles.lightitem}>
      <div className={styles.logo}>{icon}</div>
      <div className={styles.infobox}>
        <div className={styles.title}>
          <p>{title}</p>
        </div>
        <div className={styles.desc}>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default LightItem;
