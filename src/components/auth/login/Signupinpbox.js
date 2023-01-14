import React from "react";
import styles from "../css/login.module.css";
function Signupinpbox() {
  return (
    <div className={styles.loginbox} data-aos="fade-left">
      <div className={styles.formwrapper}>
        <label className={styles.label}>Your Name</label>
        <input type="text" className={styles.inp} />

        <label className={styles.label}>Email ID</label>
        <input type="text" className={styles.inp} />

        <label className={styles.label}>Password</label>
        <input type="password" className={styles.inp} />
        <input type="submit" value="Signup" className={styles.btn} />
      </div>
    </div>
  );
}

export default Signupinpbox;
