import React, { useState } from "react";
import styles from "./styles.module.scss";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  toggleOpen: boolean;
};
const InfoIcon = () => {
  return (
    <svg
      width="4"
      height="16"
      viewBox="0 0 4 16"
      className={styles.SVGflip}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5L2 0.5C2.82843 0.499999 3.5 1.17157 3.5 2C3.5 2.82843 2.82843 3.5 2 3.5L2 3.5C1.17157 3.5 0.500001 2.82843 0.5 2ZM2 5C2.82843 5 3.5 5.67157 3.5 6.5L3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17158 15.5 0.500004 14.8284 0.500004 14L0.500004 6.5C0.500004 5.67157 1.17158 5 2 5Z" />
    </svg>
  );
};
const SignalIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 12"
      className={styles.SVGflip}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.99998 10C7.42815 10 6.96462 10.4477 6.96462 11C6.96462 11.5523 7.42815 12 7.99998 12V10ZM8.01034 12C8.58217 12 9.0457 11.5523 9.0457 11C9.0457 10.4477 8.58217 10 8.01034 10V12ZM10.7856 8.04C11.2087 8.4116 11.8634 8.3817 12.2482 7.9732C12.633 7.5646 12.602 6.9322 12.179 6.5605L10.7856 8.04ZM14.2679 4.3403C14.6909 4.7119 15.3458 4.682 15.7305 4.2734C16.1153 3.8649 16.0843 3.2324 15.6613 2.8608L14.2679 4.3403ZM3.821 6.5605C3.39801 6.9322 3.36702 7.5646 3.75178 7.9732C4.13655 8.3817 4.79137 8.4116 5.21436 8.04L3.821 6.5605ZM0.338686 2.8608C-0.0843104 3.2324 -0.115299 3.8649 0.269461 4.2734C0.654232 4.682 1.30906 4.7119 1.73205 4.3403L0.338686 2.8608ZM7.99998 12H8.01034V10H7.99998V12ZM7.99998 7C9.07334 7 10.0493 7.3931 10.7856 8.04L12.179 6.5605C11.0763 5.5918 9.60852 5 7.99998 5V7ZM7.99998 2C10.4143 2 12.6121 2.8855 14.2679 4.3403L15.6613 2.8608C13.6392 1.0842 10.9494 0 7.99998 0V2ZM5.21436 8.04C5.9507 7.3931 6.92663 7 7.99998 7V5C6.39145 5 4.92365 5.5918 3.821 6.5605L5.21436 8.04ZM1.73205 4.3403C3.38792 2.8855 5.58569 2 7.99998 2V0C5.05053 0 2.36085 1.0842 0.338686 2.8608L1.73205 4.3403Z" />
    </svg>
  );
};

const CloseCard = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 12 12"
      className={styles.closeCard}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 7V12H7V7H12V5H7V0H5V5H0V7H5Z" fill="black" />
    </svg>
  );
};
function GridItem({ open, setOpen, title }: Props) {
  const toggleOpen = () => {
    setOpen(!open);
  };
  const [wifi, setWifi] = useState(false);
  const toggleWifi = () => {
    setWifi(!wifi);
  };
  return (
    <div className={styles.gridItem}>
      {open && (
        <div className={styles.gridItemOverlay}>
          <div className={styles.overlayContainer}>
            <div className={styles.overlayHeader}>
              <div>{title}</div>
              <div onClick={toggleOpen}>
                <CloseCard />
              </div>
            </div>
            {wifi ? (
              <div className={styles.QRSection}></div>
            ) : (
              <div>Stat Card</div>
            )}
            <div className={styles.radioDots}>
              <div className={styles.dot} onClick={toggleWifi}></div>
              <div className={styles.dot}></div>
            </div>
          </div>
        </div>
      )}
      <div className={styles.title}>{title}</div>
      <div className={styles.iconCluster}>
        <div className={styles.infoIcon}>
          <InfoIcon />
        </div>
        <div className={styles.wifiIcon} onClick={toggleOpen}>
          <SignalIcon />
        </div>
      </div>
    </div>
  );
}

export default GridItem;
