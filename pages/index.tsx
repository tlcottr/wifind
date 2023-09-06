import type { NextPage } from "next";
import Head from "next/head";
import GridItem from "../components/GridItem";
import styles from "../styles/Home.module.scss";
import { useState } from "react";

const Home = () => {
  const gridItemsData = [
    {
      id: 1,
      title: "Cafe Name 1",
      cafeName: "Cafe Name 1",
    },
    {
      id: 2,
      title: "Cafe Name 2",
      cafeName: "Cafe Name 2",
    },
    {
      id: 3,
      title: "Cafe Name 3",
      cafeName: "Cafe Name 1",
    },
    {
      id: 4,
      title: "Cafe Name 4",
      cafeName: "Cafe Name 2",
    },
    {
      id: 5,
      title: "Cafe Name 5",
      cafeName: "Cafe Name 1",
    },
    {
      id: 6,
      title: "Cafe Name 6",
      cafeName: "Cafe Name 2",
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
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
