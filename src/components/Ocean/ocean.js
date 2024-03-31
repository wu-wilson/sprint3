import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Color, MathUtils } from "three";
import { extend, useThree, useLoader } from "@react-three/fiber";
import { Water } from "three/examples/jsm/objects/Water.js";
import * as THREE from "three";

extend({ Water });

export const Ocean = () => {
  const ref = useRef();
  const { gl } = useThree();
  const waterNormals = useLoader(
    THREE.TextureLoader,
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg"
  );

  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(3000, 3000), []);
  const config = useMemo(
    () => ({
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xeb8934,
      waterColor: 0x0064b5,
      distortionScale: 40,
      format: gl.encoding,
    }),
    [waterNormals, gl.encoding]
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.material.uniforms.time.value += delta;
    }
  });

  return (
    <water
      ref={ref}
      args={[geom, config]}
      rotation-x={-Math.PI / 2}
      position={[0, 0, 0]}
    />
  );
};

export default Ocean;
