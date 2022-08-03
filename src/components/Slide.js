import React, { useContext } from "react";

// styles...
import styles from "./Slide.module.css";

//import context...
import { animatedContext } from "./Slider";

// Create Slide Cart
const Slide = ({ slideData }) => {
  const { animated, setAnimated } = useContext(animatedContext);
  console.log(animated);

  const { url, title } = slideData;
  return (
    <div
      onAnimationEnd={() => setAnimated(false)}
      className={
        animated === true
          ? `${styles.container} ${styles.animated}`
          : styles.container
      }
    >
      <img src={url} />
      <h2>{title}</h2>
    </div>
  );
};

export default Slide;
