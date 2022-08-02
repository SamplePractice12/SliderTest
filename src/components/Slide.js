import React from "react";

// styles...
import styles from "./Slide.module.css";

// Create Slide Cart
const Slide = ({ slideData }) => {
  const { url, title } = slideData;
  return (
    <div className={styles.container}>
      <img src={url} />
      <h2>{title}</h2>
    </div>
  );
};

export default Slide;
