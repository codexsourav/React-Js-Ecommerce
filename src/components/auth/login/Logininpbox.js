import React from "react";
import styles from "../css/login.module.css";
function Logininpbox() {
  return (
    <div className={styles.loginbox} data-aos="fade-left">
      <div className={styles.formwrapper}>
        <label className={styles.label}>Email ID</label>
        <input type="text" className={styles.inp} />

        <label className={styles.label}>Password</label>
        <input type="password" className={styles.inp} />
        <input type="submit" value="Login" className={styles.btn} />
      </div>
    </div>
  );
}

export default Logininpbox;
