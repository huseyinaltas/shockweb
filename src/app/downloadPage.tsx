// pages/download.tsx
import type { NextPage } from "next";
import Image from "next/image";
import styles from "./download.module.css";
import google from "./public/google.webp";
import shock from "./public/shock.png";
import apple from "./public/apple.webp";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

const DownloadPage: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <Image src={shock} alt="App Logo" width={100} height={100} />
        </header>
        <h1 style={{ color: "white", paddingBottom: "30px" }}>
          Dictionary And Translation
        </h1>
        <main className={styles.main}>
          <div className={styles.downloadButtons}>
            <a
              href="https://apps.apple.com/us/app/shock-dictionary-translation/id6499239870"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={apple} alt="App Store" width={200} height={60} />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.pineconesoftware.shock"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={google}
                alt="Google Play Store"
                width={200}
                height={60}
              />
            </a>
          </div>
        </main>
        <div
          style={{
            paddingTop: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link className={styles.link} href="/policy">
            Privacy Policy
          </Link>
          <Link className={styles.link} href="/about">
            About Shock
          </Link>
          <div style={{ paddingTop: "100px" }}>
            <div style={{ color: "white" }}>info@shockdictionary.com</div>
            {/* Social Media Links */}
            <div
              className={styles.socialLinks}
              style={{
                display: "flex",
                gap: "15px",
                paddingTop: "20px",
              }}
            >
              <a
                href="https://www.facebook.com/profile.php?id=61565428911689"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF color="white" size={24} />
              </a>
              <a
                href="https://www.instagram.com/shock_dictionary/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram color="white" size={24} />
              </a>
              <a
                href="https://x.com/shockdictionary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter color="white" size={24} />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok color="white" size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/shock-dictionary-81416a30a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn color="white" size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadPage;
