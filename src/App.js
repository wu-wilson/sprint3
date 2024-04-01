import { useState, useEffect } from "react";
import Home from "./pages/Home/Home";
import GuidedBreathing from "./pages/GuidedBreathing/GuidedBreathing";
import ForestVR from "./pages/ForestVR/ForestVR";
import OceanVR from "./pages/OceanVR/OceanVR";
import styles from "./App.module.scss";
import Permission from "./pages/Permission/Permission";

const pages = ["Home", "Guided Breathing", "Forest VR", "Ocean VR"];

const App = () => {
  const [page, setPage] = useState(pages[0]);
  const [animationDone, setAnimationDone] = useState(false);

  const [permissionGranted, setPermissionGranted] = useState(false);

  return (
    <>
      {permissionGranted ? (
        <div className={styles["App"]}>
          {page === "Home" ? (
            <Home
              setPage={setPage}
              animationDone={animationDone}
              setAnimationDone={setAnimationDone}
            />
          ) : page === "Guided Breathing" ? (
            <GuidedBreathing setPage={setPage} />
          ) : page === "Forest VR" ? (
            <ForestVR numTrees={100} numClouds={10} setPage={setPage} />
          ) : page === "Ocean VR" ? (
            <OceanVR setPage={setPage} />
          ) : null}
        </div>
      ) : (
        <Permission
          permissionGranted={permissionGranted}
          setPermissionGranted={setPermissionGranted}
        />
      )}
    </>
  );
};

export default App;
