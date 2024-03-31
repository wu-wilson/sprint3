import { useEffect, useRef } from "react";
import styles from "./Typewriter.module.scss";

const delay = 100;

const Typewriter = ({ text, initialDelay, onFinish }) => {
  const container = useRef(null);
  const cursor = useRef(null);

  const write = () => {
    let index = 0;
    let interval = setInterval(() => {
      if (index === text.length) {
        clearInterval(interval);
        if (onFinish) {
          onFinish();
        }
      } else {
        const span = document.createElement("span");
        span.textContent = text[index];
        container.current?.insertBefore(span, cursor.current);
        index += 1;
      }
    }, delay);
  };

  useEffect(() => {
    if (text && container?.current && cursor?.current) {
      let timeout = setTimeout(
        () => write(),
        initialDelay ? initialDelay : 1000
      );
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [container, cursor, text]);

  return (
    <div className={styles["container"]} ref={container}>
      <span className={styles["cursor"]} ref={cursor} />
    </div>
  );
};

export default Typewriter;
