import { FC } from "react";
import styles from "../download.module.css";

const PolicyPage: FC = () => {
  return (
    <div className={styles.privacy}>
      <h1>Privacy Policy</h1>
      <p className={styles.text}>
        Thank you for using Shock! We are committed to protecting your privacy.
        This Privacy Policy explains how we collect, use, and safeguard your
        personal information when you use our dictionary app.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>Personal Information</h3>
      <p className={styles.text}>
        When you use Shock, you may choose to provide us with personal
        information such as your name, email address, and time zone details.
      </p>

      <h3>Usage Information</h3>
      <p className={styles.text}>
        We collect information about how you use the app, including search
        queries, search timestamps, and interactions with app features.
      </p>

      <h3>Device Information</h3>
      <p className={styles.text}>
        We collect details about the device you use to access the app, such as
        device type, operating system, and unique device identifiers.
      </p>

      <h2>2. How We Use Your Information</h2>

      <h3>To Provide and Improve the App</h3>
      <p className={styles.text}>
        Your information helps us provide and enhance the app&apos;s features
        and functionality.
      </p>

      <h3>Personalization</h3>
      <p className={styles.text}>
        We may use your data to tailor your experience, such as suggesting
        relevant words or features based on your previous searches.
      </p>

      <h3>Communication</h3>
      <p className={styles.text}>
        We might use your contact information to inform you about app updates,
        new features, or other pertinent information.
      </p>

      <h2>3. Data Sharing and Disclosure</h2>

      <h3>Service Providers</h3>
      <p className={styles.text}>
        We may share your information with third-party service providers that
        assist us in operating the app and providing related services.
      </p>

      <h3>Legal Compliance</h3>
      <p className={styles.text}>
        We may disclose your information when required by law or in response to
        valid requests from law enforcement or government agencies.
      </p>

      <h3>Business Transfers</h3>
      <p className={styles.text}>
        If we undergo a merger, acquisition, or sale of assets, your information
        may be transferred as part of the transaction.
      </p>

      <h2>4. Data Security</h2>
      <p className={styles.text}>
        We take reasonable steps to secure your personal information and protect
        it from unauthorized access, use, or disclosure. However, please be
        aware that no method of transmission over the internet or electronic
        storage is completely secure, and we cannot guarantee absolute security.
      </p>

      <h2>5. Children&apos;s Privacy</h2>
      <p className={styles.text}>
        Shock is not intended for children under the age of 13. We do not
        knowingly collect personal information from anyone under 13. If you are
        a parent or guardian and believe your child has provided us with
        personal information, please contact us so we can remove it.
      </p>

      <h2>6. Changes to This Privacy Policy</h2>
      <p className={styles.text}>
        We may update this Privacy Policy periodically to reflect changes in our
        practices or legal requirements. We will notify you of any significant
        changes by posting the updated policy on our website or within the app.
      </p>

      <h2>7. Contact Us</h2>
      <p className={styles.text}>
        If you have any questions or concerns about this Privacy Policy or our
        data practices, please contact us at{" "}
        <a href="mailto:info@shockdictionary.com">info@shockdictionary.com</a>.
      </p>
    </div>
  );
};

export default PolicyPage;
