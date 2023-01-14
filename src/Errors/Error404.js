import React from "react";
import { Link } from "react-router-dom";
import styles from "./error.module.css";
function Error404() {
  return (
    <div>
      <div className={styles.page}>
        <div className={styles.errorimg}>
          <img src="/images/404.png" alt="404 page Not Found" />
        </div>
        <div className={styles.about}>
          <h2>Page Not Found</h2>
        </div>
        <div className={styles.gobtn}>
          <Link to="/">Back To Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Error404;
