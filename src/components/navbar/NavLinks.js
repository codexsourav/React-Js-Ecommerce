import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/navbar.module.css";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { visible } from "../../services/navbar";

import useWindowDimensions from "../../hook/useWindowDimensions";

function NavLinks() {
  const location = useLocation().pathname;
  const dispatch = useDispatch();

  const { width } = useWindowDimensions();

  const clickhide = () => {
    if (width <= 800) {
      setTimeout(() => {
        dispatch(visible());
      }, 500);
    }
    console.log(width);
  };

  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Link
            onClick={clickhide}
            className={location === "/" ? styles.active : null}
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={clickhide}
            to="/shop"
            className={location === "/shop" ? styles.active : null}
          >
            Shop
          </Link>
          <Link
            onClick={clickhide}
            to="/about"
            className={location === "/about" ? styles.active : null}
          >
            About
          </Link>
          <Link
            onClick={clickhide}
            to="/contact"
            className={location === "/contact" ? styles.active : null}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
