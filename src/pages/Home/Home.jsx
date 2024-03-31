import { useState, useEffect } from "react";
import Typewriter from "../../components/Typewriter/Typewriter";
import styles from "./Home.module.scss";

const Home = ({ setPage, animationDone, setAnimationDone }) => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    if (showButtons) {
      setAnimationDone(true);
    }
  }, [showButtons]);

  return (
    <div className={styles["container"]}>
      <div className={styles["typewriter"]}>
        {animationDone ? (
          <div className={styles["title"]}>
            <span>Welcome to Meditation VR. How can I help you today?</span>
            <span className={styles["cursor"]} />
          </div>
        ) : (
          <Typewriter
            text={"Welcome to Meditation VR. How can I help you today?"}
            initialDelay={80}
            onFinish={() => setShowButtons(true)}
          />
        )}
      </div>
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
        <div className={styles["buttons"]}>
          <button onClick={() => setPage("Guided Breathing")}>
            Guided Breathing
          </button>
          <button onClick={() => setPage("Forest VR")}>Forest VR</button>
          <button onClick={() => setPage("Ocean VR")}>Ocean VR</button>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
