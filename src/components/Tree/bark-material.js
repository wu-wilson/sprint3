import { useMemo, useRef } from "react";
import { MeshStandardMaterial, FrontSide, Color } from "three";

export const BarkMaterial = () => {
  const ref = useRef();

  const material = useMemo(() => {
    return new MeshStandardMaterial({
      side: FrontSide,
      transparent: true,
      depthWrite: true,
      depthTest: true,
      color: new Color("#964B00"), // Adjust color as needed
      roughness: 0.5,
      metalness: 0.6,
      opacity: 1.0,
    });
  }, []);

  return <primitive ref={ref} object={material} />;
};
