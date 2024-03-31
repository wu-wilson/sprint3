import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Color, MathUtils } from "three";

export const Grass = ({ position }) => {
  const groupRef = useRef();

  // Animate the grass
  useFrame((_, delta) => {
    groupRef.current.children.forEach((blade) => {
      // Randomly sway each blade of grass
      const sway = Math.sin(blade.rotation.y * 0.5 + Date.now() * 0.001);
      blade.rotation.z = MathUtils.lerp(blade.rotation.z, sway * 0.2, 0.1);
    });
  });

  const numBlades = 2000;

  return (
    <group position={position} ref={groupRef}>
      {Array.from({ length: numBlades }).map((_, index) => (
        <mesh
          key={index}
          position={[Math.random() * 50 - 25, 0, Math.random() * 50 - 25]}
          rotation={[0, Math.random() * Math.PI * 2, 0]}
        >
          <boxGeometry args={[0.05, Math.random() * 0.5 + 0.5, 0.05]} />
          <meshStandardMaterial
            color={new Color("#7AC74F").convertLinearToSRGB()}
          />
        </mesh>
      ))}
    </group>
  );
};
