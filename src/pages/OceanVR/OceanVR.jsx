import { Canvas } from "@react-three/fiber";
import { Ocean } from "../../components/Ocean/ocean";
import { Island } from "../../components/Island/island";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import styles from "./Ocean.module.scss";
import { VRButton, XR } from "@react-three/xr";
import WebXRPolyfill from "webxr-polyfill";
const polyfill = new WebXRPolyfill();

const OceanVR = ({ setPage }) => {
  return (
    <div className={styles["container"]}>
      <button onClick={() => setPage("Home")} className={styles["home"]}>
        ◄ Home
      </button>
      <AudioPlayer audioPath="/sounds/ocean.mp3" />
      <VRButton />
      <Canvas>
        <XR>
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
          <pointLight
            position={[-10, 0, -20]}
            color="#eef4aa"
            intensity={0.5}
          />
          <PerspectiveCamera
            far={1000}
            fov={100}
            makeDefault
            near={0.1}
            position={[0, 20, 36]}
          />
          <OrbitControls />
        </XR>
      </Canvas>
    </div>
  );
};

export default OceanVR;
