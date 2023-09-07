import type { NextPage } from "next";
import Head from "next/head";
import GridItem from "../components/GridItem";
import styles from "../styles/Home.module.scss";
import { useState } from "react";

const Home = () => {
  const gridItemsData = [
    {
      id: 1,
      title: "September",
      address: "Cafe Name 1",
    },
    {
      id: 2,
      title: "Little Skips East",
      address: "Cafe Name 2",
    },
    {
      id: 3,
      title: "Blue Bottle",
      address: "Cafe Name 1",
    },
    {
      id: 4,
      title: "Cafe Name 4",
      address: "Cafe Name 2",
    },
    {
      id: 5,
      title: "Cafe Name 5",
      address: "Cafe Name 1",
    },
    {
      id: 6,
      title: "Cafe Name 6",
      address: "Cafe Name 2",
    },
  ];

  const [openStates, setOpenStates] = useState(
    Array(gridItemsData.length).fill(false)
  );

  const toggleOpen = (index: number) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };
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
          {gridItemsData.map((item, index) => (
            <GridItem
              key={item.id}
              open={openStates[index]}
              setOpen={() => toggleOpen(index)}
              title={item.title}
              toggleOpen={false}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
