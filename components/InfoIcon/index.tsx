import styles from "./styles.module.scss";

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
export default InfoIcon;
