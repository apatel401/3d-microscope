/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./microscopeModel";
import CameraPositionLogging from "./CameraPositionLogging"

function App() {
  const [cameraPos, setCameraPos] = useState({
    X: 3,
    Y: 0,
    Z: -4
  })
  const [zoom, setZoom] = useState(0.53);
  const [rotation, setRotation] = useState([0, 0, 0]);

  const handleZoom = (delta) => {

    setZoom(prevZoom => prevZoom + delta);
  };

  const handleRotation = (axis, delta) => {
    setRotation(prevRotation => {
      const newRotation = [...prevRotation];
      newRotation[axis] += delta;
      return newRotation;
    });
  };

  return (
    <>
     <Canvas 
     pixelRatio={window.devicePixelRatio} 
     orthographic
     camera={{ fov: 75, near: 0.1, far: 1000, position: [cameraPos.X, cameraPos.Y, cameraPos.Z] }}>
      <CameraPositionLogging event="mousedown" />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[10, 10, 10]} />
      <Model zoom={zoom} rotation={rotation} position={[0,-1,0]}  />
      <mesh position={[0.75,-1.05,-0.75]}>
        <cylinderGeometry args={[2, 2, 0.2, 32]} />
        <meshLambertMaterial color={"hotpink"} />
      </mesh>
      <axesHelper visible={true} args={[10]}/>
      <OrbitControls />
    </Canvas>
    <div className="btn-wrapper">
     <button onClick={() => handleZoom(0.075)}>Zoom in</button>
        <button onClick={() => handleZoom(-0.075)}>Zoom out</button>
        <button onClick={() => handleRotation(1, -0.1)}>Rotate Left</button>
        <button onClick={() => handleRotation(1, 0.1)}>Rotate right</button>
        <button onClick={() => handleRotation(0, 0.1)}>Rotate up</button>
        <button onClick={() => handleRotation(0, -0.1)}>Rotate down</button>
    </div>
    </>
   
  );
}

export default App;
