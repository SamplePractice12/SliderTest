import React, { useRef, useState, createContext } from "react";

//slide
import Slide from "./Slide";

// styles ....
import styles from "./Slider.module.css";

export const animatedContext = createContext();

const Slider = ({ slides }) => {
  const [animated, setAnimated] = useState(false);
  const arrowRight = useRef(null);
  const arrowLeft = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // set mouseOver mouseOut handlers for opacity arrows...
  const arrowHadler = () => {
    arrowRight.current.style.opacity = "1";
    arrowLeft.current.style.opacity = "1";
  };

  const arrowOutHandler = () => {
    arrowRight.current.style.opacity = "0";
    arrowLeft.current.style.opacity = "0";
  };

  //Slider handler
  const GotoNext = () => {
    const isLastIndex = currentIndex === slides.length - 1;
    isLastIndex ? setCurrentIndex(0) : setCurrentIndex((prev) => prev + 1);
    setAnimated(true);
  };

  const GotoPrev = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
    setAnimated(true);
  };
  return (
    <animatedContext.Provider value={{ animated, setAnimated }}>
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
        <div
          onClick={GotoPrev}
          ref={arrowLeft}
          className={`${styles.arrow} ${styles.arrowLeft}`}
        >
          &#60;
        </div>
      </div>
    </animatedContext.Provider>
  );
};

export default Slider;
