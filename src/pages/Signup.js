import React from "react";

import Loginsidecom from "../components/auth/login/Loginsidecom";
import Signupinpbox from "../components/auth/login/Signupinpbox";

import styles from "../components/auth/css/login.module.css";

function Signup() {
  return (
    <>
      <div className={styles.auth}>
        <Loginsidecom type="signup" />
        <Signupinpbox />
      </div>
    </>
  );
}

export default Signup;
