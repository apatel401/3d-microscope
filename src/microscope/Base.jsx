/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { useState } from "react";
const Base = () => {
  const [hover, setHover]= useState(false)
  const { nodes, materials } = useGLTF("/scene.gltf");
  return (
    <group
      position={[0.53, 1.92, 0.9]}
      rotation={[0, 0, -Math.PI]}
      scale={[1.66, 1.42, 0.15]}
      onPointerLeave={()=> setHover(false)} 
      onPointerEnter={()=> setHover(true)} 
    >
      <mesh geometry={nodes.Cube002_0.geometry} material={materials.metal} 
      >
        <meshStandardMaterial color={hover ? "red" : null}  />
      </mesh>
    </group>
  );
};

export default Base;
