import React from "react";

import styles from "../components/auth/css/login.module.css";
import Logininpbox from "../components/auth/login/Logininpbox";
import Loginsidecom from "../components/auth/login/Loginsidecom";

function Login() {
  return (
    <div>
      <div className={styles.auth}>
        <Loginsidecom type="login" />
        <Logininpbox />
      </div>
    </div>
  );
}

export default Login;
