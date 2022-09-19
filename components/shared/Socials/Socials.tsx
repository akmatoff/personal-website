import Link from "next/link";
import { GrGithub, GrLinkedin, GrInstagram } from "react-icons/gr";
import { FaTelegram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import styles from "./Socials.module.css";

function Socials() {
  return (
    <div className={`${styles.container} flex row centered`}>
      <div className={`${styles.inner} flex row space-around`}> 
        <Link href="https://github.com/akmatoff">
          <a className={styles["social-icon"]}>
            <GrGithub />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/akmatoff/">
          <a className={styles["social-icon"]}>
            <GrLinkedin />
          </a>
        </Link>
        <Link href="https://instagram.com/akmatoff.exe">
          <a className={styles["social-icon"]}>
            <GrInstagram />
          </a>
        </Link>
        <Link href="https://t.me/akmatoffexe">
          <a className={styles["social-icon"]}>
            <FaTelegram />
          </a>
        </Link>
        <Link href="mailto:akmatoff.exe@gmail.com">
          <a className={styles["social-icon"]}>
            <HiOutlineMail />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Socials;
