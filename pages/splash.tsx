import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { Tooltip } from "react-tooltip";

const AppIcon = () => {
  return (
    <a data-tooltip-id="my-tooltip-inline" data-tooltip-content="Install PWA">
      <svg
        width="100"
        height="100"
        viewBox="0 0 512 512"
        fill="none"
        className={styles.outline}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 16C0 7.16344 7.16344 0 16 0H496C504.837 0 512 7.16344 512 16V496C512 504.837 504.837 512 496 512H16C7.16344 512 0 504.837 0 496V16Z"
          fill="black"
        />
        <path d="M163.5 129H348.5V160.237H163.5V129Z" fill="white" />
        <path
          d="M132.667 160.237L163.5 160.237V191.474H132.667V160.237Z"
          fill="white"
        />
        <path
          d="M101.833 222.711V191.474H132.667V222.711H101.833Z"
          fill="white"
        />
        <path
          d="M101.833 222.711L101.833 253.948H71V222.711L101.833 222.711Z"
          fill="white"
        />
        <path
          d="M379.333 160.237L348.5 160.237V191.474H379.333L379.333 222.711H410.167L410.167 253.948H441V222.711L410.167 222.711V191.474H379.333V160.237Z"
          fill="white"
        />
        <path
          d="M194.333 222.711V253.948H317.667V222.711H194.333Z"
          fill="white"
        />
        <path
          d="M194.333 253.948L163.5 253.948V285.185L132.667 285.185V316.422H163.5L163.5 285.185H194.333V253.948Z"
          fill="white"
        />
        <path d="M348.5 285.185H379.333V316.422H348.5V285.185Z" fill="white" />
        <path
          d="M348.5 285.185L317.667 285.185V253.948L348.5 253.948L348.5 285.185Z"
          fill="white"
        />
        <path
          d="M209.75 321.526V352.763H178.917V384H209.75V352.763L302.25 352.763V384H333.083V352.763L302.25 352.763V321.526L209.75 321.526Z"
          fill="white"
        />
      </svg>
    </a>
  );
};

const Splash: NextPage = () => {
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
        <Tooltip
          id="my-tooltip-inline"
          style={{
            backgroundColor: "#000000",
            color: "#ffffff",
            borderRadius: ".2em",
            paddingLeft: ".75em",
            paddingRight: ".75em",
            stroke: "#ffffff",
          }}
        />
        <AppIcon />
      </main>
    </div>
  );
};

export default Splash;
