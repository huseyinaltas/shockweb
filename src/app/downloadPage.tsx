// pages/download.tsx
import type { NextPage } from "next";
import Image from "next/image";
import styles from "./download.module.css";
import google from "./public/google.webp";
import shock from "./public/shock.png";
import apple from "./public/apple.webp";
import Link from "next/link";

const DownloadPage: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <Image src={shock} alt="App Logo" width={150} height={150} />
          <h1 style={{ color: "white", paddingTop: "40px" }}>
            Download Our App
          </h1>
        </header>
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
          <Link href="/policy">Privacy Policy</Link>
          <div style={{ color: "white" }}>info@shockdictionary.com</div>
        </div>
      </div>
    </>
  );
};

export default DownloadPage;
