import Image from "next/image";
import Section from "../../shared/Section/Section";
import Socials from "../../shared/Socials/Socials";

import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <Section id="home">
      <div className="flex column centered">
        <div className={`${styles["hero-container"]} flex column`}>
          <div className={styles["hero-heading-text"]}>AZIM AKMATOV</div>

          <div className={styles["hero-body-text"]}>
            JavaScript Developer and Musician based in Kyrgyzstan.
          </div>

        </div>

        <Socials />

      </div>
    </Section>
  );
}

export default HeroSection;
