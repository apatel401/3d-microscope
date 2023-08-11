/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

const CameraPositionLogging = ({ event }) => {
  const { camera } = useThree();
  const cameraRef = useRef();

  const mathRound = (number) => Math.round(number * 100) / 100;
  useEffect(() => {
    cameraRef.current = camera;
    const logPosition = () => {
      const { x, y, z } = cameraRef.current.position;
      console.log(
        `Camera position: x: ${mathRound(x)}, y: ${mathRound(
          y
        )}, z: ${mathRound(z)}`
      );
    };
    window.addEventListener(event, logPosition);
    return () => window.removeEventListener(event, logPosition);
  }, []);

  return null;
};

export default CameraPositionLogging;
