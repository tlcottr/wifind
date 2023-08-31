import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wi-Find</title>
        <meta
          name="description"
          content="A tool for locating reliable remote working environments in your neighborhood"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}></div>
          <div className={styles.gridItem}></div>
          <div className={styles.gridItem}></div>
          <div className={styles.gridItem}></div>
          <div className={styles.gridItem}></div>
          <div className={styles.gridItem}></div>
        </div>
      </main>
    </div>
  );
};

export default Home;
