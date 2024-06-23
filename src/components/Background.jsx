import React from "react";
import styles from "./styles/Background.module.css";

const Background = ({ children }) => {
  return <main className={styles.bg}>{children}</main>;
};

export default Background;
