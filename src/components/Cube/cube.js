import { useRef, useState, useEffect, forwardRef } from "react";
import { useFrame } from "@react-three/fiber";
import themes from "../../_themes.module.scss";

export const Cube = forwardRef((props, factor) => {
  const meshRef = useRef();
  const incrementing = useRef(true);

  useFrame((_, delta) => {
    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta;
    if (incrementing.current) {
      meshRef.current.position.z += 0.01 * factor.current;
      if (meshRef.current.position.z >= 3) {
        incrementing.current = false;
      }
    } else {
      meshRef.current.position.z -= 0.01 * factor.current;
      if (meshRef.current.position.z <= -2) {
        incrementing.current = true;
      }
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color={themes.primary_color} />
    </mesh>
  );
});
