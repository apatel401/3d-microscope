/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useHelper, Environment, OrbitControls } from "@react-three/drei";
import CameraPositionLogging from "./CameraPositionLogging";
import * as THREE from "three";

const UtilLights = () => {
  const directionalLightRef = useRef();
  const directionalLightRef2 = useRef();
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, "blue");
  useHelper(directionalLightRef2, THREE.DirectionalLightHelper, 1, "purple");
  return (
    <>
      <directionalLight
        castShadow
        ref={directionalLightRef}
        intensity={2}
        position={[3, 1, 10]}
      />
      <directionalLight
        castShadow
        ref={directionalLightRef2}
        intensity={2}
        position={[3, 1 - 10]}
      />
      <CameraPositionLogging event="mousedown" />
      {/* Lights */}
      <directionalLight intensity={1} position={[5, 10, 5]} />
      {/* Environment */}
      <Environment preset={"city"} />
      <axesHelper visible={true} args={[2]} />
      <axesHelper />
      <OrbitControls />
    </>
  );
};

export default UtilLights;
