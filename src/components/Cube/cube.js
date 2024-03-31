import { useRef, useState, useEffect, forwardRef } from "react";
import { useFrame } from "@react-three/fiber";
import themes from "../../_themes.module.scss";

export const Cube = forwardRef((props, factor) => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta;
    meshRef.current.position.z =
      Math.sin(state.clock.elapsedTime * factor.current) * 3;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color={themes.primary_color} />
    </mesh>
  );
});
