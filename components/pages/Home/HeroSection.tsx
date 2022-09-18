import Image from "next/image";
import Section from "../../shared/Section/Section";

import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <Section id="home">
      <div className="flex row centered">

        <div className="flex column">
          <div className={styles['hero-heading-text']}>Welcome to my blog</div>

          <div className={styles['hero-body-text']}>
            My personal blog where I write about various topics like programming, music and other things.
          </div>
        </div>

      </div>
    </Section>
  );
}

export default HeroSection;
