import Section from "../../shared/Section/Section";

import styles from "./About.module.css";

function About() {
  return (
    <Section id="about">
      <div className={`${styles["section-inner"]} flex column`}>
        <div className={styles.container}>
          <h1>Who am I</h1>
        </div>

        <div className={styles.container}>
          <p>
            I'm a guy who loves coding, playing guitar, singing and a lot of
            other things.
          </p>
          <p>
            I'm quite passionate about creating good looking websites which
            solve problems and provide some value.
          </p>
        </div>

        <div className={styles.container}>
          <h1>Some fun facts</h1>
        </div>

        <div className={styles.container}>
          <ul>
            <li>
              I love learning not only programming languagues (human ones too)
            </li>
            <li>I speak Russian, Kyrgyz, Kazakh and a little German.</li>
            <li>Currently learning Korean</li>
            <li>I've been playing guitar for 5 years</li>
            <li>I've been making electronic music for 6 years</li>
            <li>I walk quite a lot</li>
            <li>I sing in the streets with my friends</li>
          </ul>
        </div>

        <div className={styles.container}>
          <h1>Skills</h1>
        </div>

        <div className={styles['grid-container']}>
          <div className={styles['grid-container__item']}>HTML</div>
          <div className={styles['grid-container__item']}>CSS</div>
          <div className={styles['grid-container__item']}>React</div>
          <div className={styles['grid-container__item']}>Redux</div>
          <div className={styles['grid-container__item']}>Next.js</div>
          <div className={styles['grid-container__item']}>Typescript</div>
          <div className={styles['grid-container__item']}>SCSS</div>
          <div className={styles['grid-container__item']}>styled-components</div>
        </div>
      </div>
    </Section>
  );
}

export default About;
