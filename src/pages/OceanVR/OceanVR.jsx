import { Canvas } from "@react-three/fiber";
import { Ocean } from "../../components/Ocean/ocean";
import { Island } from "../../components/Island/island";
import {
  PerspectiveCamera,
  OrbitControls,
  DeviceOrientationControls,
} from "@react-three/drei";
import { useState } from "react";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import styles from "./Ocean.module.scss";

const OceanVR = ({ setPage }) => {
  const [isOrbit, setIsOrbit] = useState(true);

  return (
    <div className={styles["container"]}>
      <div className={styles["buttons"]}>
        <button onClick={() => setPage("Home")}>◄ Home</button>
        <button onClick={() => setIsOrbit(!isOrbit)}>
          Switch to {isOrbit ? "Orientation" : "Orbit"}
        </button>
      </div>
      <AudioPlayer audioPath="/sounds/ocean.mp3" />
      <Canvas>
        <Ocean />
        <Island position={[0, -250, 6]} scale={[0.1, 0.1, 0.1]} />
        <hemisphereLight
          color="#87CEEB"
          intensity={0.8}
          groundColor="#362907"
        />
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[2.5, 8, 5]}
          intensity={0.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} color="#eef4aa" intensity={0.5} />
        <PerspectiveCamera
          far={1000}
          fov={100}
          makeDefault
          near={0.1}
          position={[0, 20, 36]}
        />
        {isOrbit ? <OrbitControls /> : <DeviceOrientationControls />}
      </Canvas>
    </div>
  );
};

export default OceanVR;
