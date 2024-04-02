import { useState, useEffect, useRef } from "react";
import Typewriter from "../../components/Typewriter/Typewriter";
import styles from "./Home.module.scss";

const Home = ({ setPage, animationDone, setAnimationDone }) => {
  const [showButtons, setShowButtons] = useState(false);

  const buttonsContainer = useRef(null);

  const enableButtons = () => {
    if (buttonsContainer && buttonsContainer.current) {
      const buttons = buttonsContainer.current.querySelectorAll("button");
      buttons.forEach((button) => {
        button.disabled = false;
        setAnimationDone(true);
      });
    }
  };

  useEffect(() => {
    const handleAnimationEnd = (event) => {
      if (event.animationName === styles["fadeIn"]) {
        enableButtons();
      }
    };

    window.addEventListener("animationend", handleAnimationEnd);

    return () => {
      window.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  return (
    <div className={styles['outer-container']}>
    <video autoPlay muted loop className={styles["backgroundVideo"]}>
        <source src="/videos/Home.mov" type="video/mp4" />
      </video>
      <div className={styles["typewriter"]}>
        {animationDone ? (
          <div className={styles["title"]}>
            <span >Welcome to Meditation VR.</span>
            <span className={styles["cursor"]} />
          </div>
        ) : (
          <Typewriter
            text={"Welcome to Meditation VR."}
            initialDelay={80}
            onFinish={() => setShowButtons(true)}
          />
        )}
      </div>
    <div className={styles["container"]} >
      {animationDone ? (
        <div className={styles["buttons"]}>
          <button
            className={styles["no-animation"]}
            onClick={() => setPage("Guided Breathing")}
          >
            Guided Breathing
          </button>
          <button
            className={styles["no-animation"]}
            onClick={() => setPage("Forest VR")}
          >
            Forest VR
          </button>
          <button
            className={styles["no-animation"]}
            onClick={() => setPage("Ocean VR")}
          >
            Ocean VR
          </button>
        </div>
      ) : showButtons ? (
        <div className={styles["buttons"]} ref={buttonsContainer}>
          <button
            disabled="disabled"
            onClick={() => setPage("Guided Breathing")}
          >
            Guided Breathing
          </button>
          <button disabled="disabled" onClick={() => setPage("Forest VR")}>
            Forest VR
          </button>
          <button disabled="disabled" onClick={() => setPage("Ocean VR")}>
            Ocean VR
          </button>
        </div>
      ) : null}
    </div>
    </div>
  );
};

export default Home;
