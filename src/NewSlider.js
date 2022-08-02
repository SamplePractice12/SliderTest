import React, { useEffect, useState } from "react";

//styless
import styles from "./NewSlider.module.css";

const NewSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMouseUp, setIsmouseUp] = useState(false);

  const GotoNext = () => {
    const isLastIndex = currentIndex === slides.length - 1;
    isLastIndex ? setCurrentIndex(0) : setCurrentIndex((prev) => prev + 1);
  };

  const createSlide = () => {
    return (
      <img
        src={slides[currentIndex].url}
        className={`${styles.imageFixer} ${styles.fade}`}
      />
    );
  };

  useEffect(() => {
    createSlide();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.arrow}>
        <div>&#10094;</div>
        <div onClick={GotoNext}>&#10095;</div>
      </div>
      {/* <img src={slides[currentIndex].url} className={styles.imageFixer} /> */}
      {createSlide()}
    </div>
  );
};

export default NewSlider;
