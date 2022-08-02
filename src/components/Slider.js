import React, { useRef, useState, useEffect } from "react";

//slide
import Slide from "./Slide";

// styles ....
import styles from "./Slider.module.css";

const Slider = ({ slides }) => {
  const arrowRight = useRef(null);
  const arrowLeft = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const arrowHadler = () => {
    arrowRight.current.style.opacity = "1";
    arrowLeft.current.style.opacity = "1";
  };

  const arrowOutHandler = () => {
    arrowRight.current.style.opacity = "0";
    arrowLeft.current.style.opacity = "0";
  };

  useEffect(() => {
    // makeSlide();
  }, [currentIndex]);

  const GotoNext = () => {
    const isLastIndex = currentIndex === slides.length - 1;
    isLastIndex ? setCurrentIndex(0) : setCurrentIndex((prev) => prev + 1);
  };
  return (
    <div
      className={styles.container}
      onMouseOut={arrowOutHandler}
      onMouseOver={arrowHadler}
    >
      <Slide slideData={slides[currentIndex]} />
      <div
        onClick={GotoNext}
        ref={arrowRight}
        className={`${styles.arrow} ${styles.arrowRight}`}
      >
        &#62;
      </div>
      <div ref={arrowLeft} className={`${styles.arrow} ${styles.arrowLeft}`}>
        &#60;
      </div>
    </div>
  );
};

export default Slider;
