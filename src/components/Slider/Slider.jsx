import { forwardRef } from "react";
import styles from "./Slider.module.scss";

const Slider = forwardRef((props, factor) => {
  const handleChange = (event) => {
    factor.current = event.target.value;
  };

  return (
    <div className={styles["container"]}>
      <span>Speed</span>
      <input
        type="range"
        onChange={handleChange}
        min="0.5"
        max="3"
        step="0.1"
      />
    </div>
  );
});

export default Slider;
