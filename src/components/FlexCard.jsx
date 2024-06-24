import React from "react";
import styles from "./styles/FlexCard.module.css";

const FlexCard = ({ number, title, description }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.number}>{number}</div>
      <h2 className={styles.title}>{title}</h2>

      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default FlexCard;
