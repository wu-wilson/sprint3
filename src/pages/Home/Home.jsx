import { useState } from "react";
import Typewriter from "../../components/Typewriter/Typewriter";
import styles from "./Home.module.scss";

const Home = ({ setPage }) => {
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div className={styles["container"]}>
      <div className={styles["typewriter"]}>
        <Typewriter
          text={"Welcome to Meditation VR. How can I help you today?"}
          initialDelay={80}
          onFinish={() => setShowButtons(true)}
        />
      </div>
      {showButtons ? (
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
