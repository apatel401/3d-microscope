/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
const Base = () => {
  const { nodes, materials } = useGLTF("/scene.gltf");
  return (
    <group
      position={[0.53, 1.92, 0.9]}
      rotation={[0, 0, -Math.PI]}
      scale={[1.66, 1.42, 0.15]}
    >
      <mesh geometry={nodes.Cube002_0.geometry} material={materials.metal}>
        <meshPhongMaterial color={"red"} />
      </mesh>
    </group>
  );
};

export default Base;
