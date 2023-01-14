import React from "react";
import styles from "./css/navbar.module.css";
import NavLinks from "./NavLinks";
import CartNav from "./CartNav";
import Navsearch from "./Navsearch";
import { useSelector } from "react-redux";
import Cart from "./Cart/Cart";

function Navbar() {
  const menusts = useSelector((state) => state.navbar);

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logosec}>
          <img
            src="/images/logo.png"
            alt="logo"
            className={styles.logo}
            height="40px"
          />
        </div>
        <div
          className={styles.menulinks}
          style={menusts.value ? { display: "block" } : null}
        >
          <NavLinks />
          <Navsearch />
        </div>

        <div className={styles.menusec}>
          <CartNav />
        </div>
      </div>

      {menusts.cartshow && <Cart />}
    </>
  );
}

export default Navbar;
