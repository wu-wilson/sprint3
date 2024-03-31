import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { Color, MathUtils } from "three";
import { Tree } from "../../components/Tree/tree";
import { Cloud } from "@react-three/drei";
import { Grass } from "../../components/Grass/grass";
import Loading from "../Loading/Loading";
import styles from "./Forest.module.scss";

const ForestVR = ({ numTrees, numClouds }) => {
  // Generate a random position within a range
  const randomPosition = (min, max, y) => {
    return [MathUtils.randFloat(min, max), y, MathUtils.randFloat(min, max)];
  };

  return (
    <div className={styles["container"]}>
      <Suspense fallback={<Loading message="Getting your VR scene ready..." />}>
        <Canvas shadows>
          {Array.from({ length: numTrees }).map((_, index) => (
            <Tree key={index} position={randomPosition(-25, 25, 0)} />
          ))}
          {Array.from({ length: numClouds }).map((_, index) => (
            <Cloud key={index} position={randomPosition(-25, 25, 20)} />
          ))}
          <Grass position={[0, 0, 0]} />
          <mesh
            name="ground"
            rotation={[MathUtils.degToRad(-90), 0, 0]}
            receiveShadow
          >
            <planeGeometry args={[50, 50]} />
            <meshStandardMaterial
              color={new Color("#3f6d21").convertLinearToSRGB()}
            />
          </mesh>
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
            position={[0, 3, 6]}
          />
          <OrbitControls />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default ForestVR;
