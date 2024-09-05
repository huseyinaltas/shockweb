import { FC } from "react";
import styles from "../about.module.css";

const AboutUs: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.textColorPrimary}>
          <p>Welcome</p>
        </div>
        <p>
          To Shock Dictionary and Translation, where words come alive with
          meaning and purpose. At Shock, we believe that language is more than
          just a collection of words; it&apos;s the very fabric that weaves
          together our thoughts, emotions, and experiences. Our mission is to
          provide a dynamic platform that empowers users to explore the richness
          of language in all its forms, from the everyday to the extraordinary
        </p>
      </div>
      <div className={styles.section}>
        <div className={styles.textColorPrimary}>
          <p>Connect With Us</p>
        </div>
        <p>
          Got a question, suggestion, or just want to say hello? We&apos;d love
          to hear from you!
        </p>
        <p className={styles.textColorSecondary}>info@shockdictionary.com</p>
      </div>
      <div className={styles.section}>
        <div className={styles.textColorPrimary}>
          <p>Location</p>
        </div>
        <p>
          Based in the vibrant state of Texas, USA, Shock draws inspiration from
          the diverse cultures, languages, and landscapes that surround us.
          Situated at the crossroads of innovation and tradition, our
          headquarters reflect our commitment to bridging the gap between the
          past and the future of language
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
