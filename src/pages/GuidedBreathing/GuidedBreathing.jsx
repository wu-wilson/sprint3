import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Cube } from "../../components/Cube/cube";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import Slider from "../../components/Slider/Slider";
import styles from "./GuidedBreathing.module.scss";

const GuidedBreathing = ({ setPage }) => {
  const factor = useRef(0.7);

  return (
    <div className={styles["container"]}>
      <div className={styles["slider-container"]}>
        <Slider ref={factor} />
      </div>
      <button onClick={() => setPage("Home")} className={styles["home"]}>
        ◄ Home
      </button>
      <AudioPlayer audioPath="/sounds/breathing_music.mp3" />
      <Canvas>
        <Cube ref={factor} />
        <ambientLight intensity={0.6} />
        <directionalLight castShadow position={[2.5, 8, 5]} intensity={0.9} />
      </Canvas>
    </div>
  );
};

export default GuidedBreathing;
