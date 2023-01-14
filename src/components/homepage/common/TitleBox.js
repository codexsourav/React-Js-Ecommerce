import React from "react";
import styles from "./title.module.css";
function TitleBox({ title }) {
  return (
    <div className={styles.fctitle} data-aos="fade-up">
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}

export default TitleBox;
