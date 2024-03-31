import { useState } from "react";
import Home from "./pages/Home/Home";
import GuidedBreathing from "./pages/GuidedBreathing/GuidedBreathing";
import ForestVR from "./pages/ForestVR/ForestVR";
import OceanVR from "./pages/OceanVR/OceanVR";
import styles from "./App.module.scss";

const pages = ["Home", "Guided Breathing", "Forest VR", "Ocean VR"];

const App = () => {
  const [page, setPage] = useState(pages[0]);

  return (
    <div className={styles["App"]}>
      {page === "Home" ? (
        <Home setPage={setPage} />
      ) : page === "Guided Breathing" ? (
        <GuidedBreathing setPage={setPage} />
      ) : page === "Forest VR" ? (
        <ForestVR numTrees={100} numClouds={10} setPage={setPage} />
      ) : page === "Ocean VR" ? (
        <OceanVR setPage={setPage} />
      ) : null}
    </div>
  );
};

export default App;
