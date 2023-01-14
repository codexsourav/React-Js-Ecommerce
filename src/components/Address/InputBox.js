import React from "react";

import styles from "./css/inputbox.module.css";

function InputBox({ title, type, name, value, setdata }) {
  return (
    <div className={styles.inputbox}>
      <p className={styles.title}>{title}</p>
      <input
        className={styles.inp}
        name={name}
        type={type}
        value={value}
        onChange={(e) => setdata(e)}
      />
    </div>
  );
}

export default InputBox;
