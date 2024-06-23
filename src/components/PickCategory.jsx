import React from "react";
import styles from "./styles/PickCategory.module.css";
import backIcon from "../assets/images/icon-back.svg";
import CategoryCard from "./CategoryCard";

const PickCategory = ({ onClick, onCategoryPick }) => {
  const categories = [
    "Movies",
    "TV Shows",
    "Countries",
    "Capital Cities",
    "Animals",
    "Sports",
  ];
  return (
    <main className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.topFlex}>
          <button onClick={onClick} className={styles.backButton}>
            <img src={backIcon} alt="Back Icon" />
          </button>
          <h1 className={styles.topFlexTitle}>Pick a Category</h1>
          <div style={{ height: "9.4rem", width: "9.4rem" }}></div>
        </div>
        <div className={styles.bottomGrid}>
          {categories.map((category, i) => (
            <CategoryCard
              onCategoryPick={onCategoryPick}
              key={i}
              category={category}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default PickCategory;
