import React, { Suspense } from "react";
import { useGLTF } from "@react-three/drei";

export const Island = ({ position, scale }) => {
  const gltf = useGLTF("/models/hill.glb");

  return <primitive object={gltf.scene} position={position} scale={scale} />;
};
