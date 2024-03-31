import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Color, MathUtils } from "three";

export const Cloud = ({ position }) => {
  const meshRef = useRef();

  // Generate random offsets for cloud components
  const offsetX1 = useMemo(() => MathUtils.randFloat(-1, 1), []);
  const offsetY1 = useMemo(() => MathUtils.randFloat(-1, 1), []);
  const offsetX2 = useMemo(() => MathUtils.randFloat(-1, 1), []);
  const offsetY2 = useMemo(() => MathUtils.randFloat(-1, 1), []);
  const offsetX3 = useMemo(() => MathUtils.randFloat(-1, 1), []);
  const offsetY3 = useMemo(() => MathUtils.randFloat(-1, 1), []);
  const offsetY4 = useMemo(() => MathUtils.randFloat(-1, 1), []);

  // Generate a random speed and offset for each cloud
  const driftSpeed = useMemo(() => MathUtils.randFloat(1, 500), []);
  const driftOffset = useMemo(() => MathUtils.randFloat(0, Math.PI * 2), []);

  useFrame((_, delta) => {
    // Update the position of the cloud to create a drifting animation
    if (meshRef.current) {
      meshRef.current.position.x =
        Math.sin(driftSpeed * Date.now() + driftOffset) * 10;
    }
  });

  return (
    <group position={position} ref={meshRef}>
      {/* Main cloud body */}
      <mesh position={[offsetX1, offsetY1, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial
          color={new Color("#ffffff").convertLinearToSRGB()}
          roughness={0.8}
          metalness={0}
        />
      </mesh>
      {/* Cloud extensions */}
      <mesh position={[offsetX2, offsetY2, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial
          color={new Color("#ffffff").convertLinearToSRGB()}
          roughness={0.8}
          metalness={0}
        />
      </mesh>
      <mesh position={[offsetX3, offsetY3, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={new Color("#ffffff").convertLinearToSRGB()}
          roughness={0.8}
          metalness={0}
        />
      </mesh>
      {/* Cloud top */}
      <mesh position={[0, offsetY4, 0]}>
        <sphereGeometry args={[1.5, 16, 16]} />
        <meshStandardMaterial
          color={new Color("#ffffff").convertLinearToSRGB()}
          roughness={0.8}
          metalness={0}
        />
      </mesh>
    </group>
  );
};
