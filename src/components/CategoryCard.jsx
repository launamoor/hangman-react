import React from "react";
import styles from "./styles/CategoryCard.module.css";

const CategoryCard = ({ category, onCategoryPick }) => {
  return (
    <button onClick={onCategoryPick} className={styles.cardContainer}>
      <div className={styles.innerWrapper}>
        <h3 className={styles.categoryTitle}>{category}</h3>
      </div>
    </button>
  );
};

export default CategoryCard;
