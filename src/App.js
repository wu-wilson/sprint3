import { useState } from "react";
import Home from "./pages/Home/Home";
import GuidedBreathing from "./pages/GuidedBreathing/GuidedBreathing";
import ForestVR from "./pages/ForestVR/ForestVR";
import styles from "./App.module.scss";

const pages = ["Home", "Guided Breathing", "Forest VR"];

const App = () => {
  const [page, setPage] = useState(pages[0]);

  return (
    <div className={styles["App"]}>
      {page === "Home" ? (
        <Home setPage={setPage} />
      ) : page === "Guided Breathing" ? (
        <GuidedBreathing />
      ) : page === "Forest VR" ? (
        <ForestVR numTrees={175} numClouds={10} />
      ) : null}
    </div>
  );
};

export default App;
