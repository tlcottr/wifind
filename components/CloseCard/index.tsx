import styles from "./styles.module.scss";

type Props = {
  toggleOpen: boolean;
};

const CloseCard = ({ toggleOpen }: Props) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 12 12"
      className={styles.closeCard}
      xmlns="http://www.w3.org/2000/svg"
      onClick={toggleOpen}
    >
      <path d="M5 7V12H7V7H12V5H7V0H5V5H0V7H5Z" fill="black" />
    </svg>
  );
};
export default CloseCard;
