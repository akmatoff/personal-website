import Link from "next/link";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <nav className={styles["navbar-elements-container"]}>
          <div className={styles["navbar-element"]}>
            <Link href="#home">
              <a>HOME</a>
            </Link>
          </div>
          <div className={styles["navbar-element"]}>
            <Link href="#featured">
              <a>FEATURED</a>
            </Link>
          </div>
          <div className={styles["navbar-element"]}>
            <Link href="#featured">
              <a>WORK</a>
            </Link>
          </div>
          <div className={styles["navbar-element"]}>
            <Link href="#about">
              <a>ABOUT</a>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
