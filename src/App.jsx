/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { Suspense, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "./microscopeModel";
import UtilLights from "./UtilLights";

function App() {
  const [cameraPos, setCameraPos] = useState({ X: 3, Y: 0, Z: -4 });
  const [rot, setRot] = useState({ X: 0, Y: 0, Z: 0 });
  const [zoom, setZoom] = useState(0.53);
  const [rotation, setRotation] = useState([0, 0, 0]);

  const handleZoom = (delta) => {
    setZoom((prevZoom) => prevZoom + delta);
  };

  const handleRotation = (axis, delta) => {
    setRotation((prevRotation) => {
      const newRotation = [...prevRotation];
      newRotation[axis] += delta;
      return newRotation;
    });
  };

  return (
    <Suspense>
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 1000,
          position: [cameraPos.X, cameraPos.Y, cameraPos.Z],
        }}
      >
        <UtilLights />
        <group zoom={zoom} rotation={rotation}>
          <Model zoom={zoom}  position={[0, -1, 0]} />
          <mesh position={[0.75, -1.05, -0.85]}>
            <cylinderGeometry args={[2, 2, 0.2, 32]} />
            <meshLambertMaterial color={"hotpink"} />
          </mesh>
        </group>
      </Canvas>
      <div className="btn-wrapper">
        <button onClick={() => handleZoom(0.075)}>Zoom in</button>
        <button onClick={() => handleZoom(-0.075)}>Zoom out</button>
        <button onClick={() => handleRotation(1, -0.1)}>Rotate Left</button>
        <button onClick={() => handleRotation(1, 0.1)}>Rotate right</button>
        <button onClick={() => handleRotation(0, 0.1)}>Rotate up</button>
        <button onClick={() => handleRotation(0, -0.1)}>Rotate down</button>
      </div>
    </Suspense>
  );
}

export default App;
