/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useEffect, createContext, useMemo, useState, useRef } from "react"
import { useFrame , useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three"
import {FXAAShader} from "three/examples/jsm/shaders/FXAAShader"

const context = createContext();


// const Controls = () => {
    //   const { camera, gl } = useThree()
    //   const ref = useRef()
    //   useFrame(() => ref.current.update())
    //   return <orbitControls ref={ref} target={[0, 0, 0]} enableDamping args={[camera, gl.domElement]} />
    // }
    
    function useHover() {
        const ref = useRef()
        const setHovered = useContext(context)
        const onPointerOver = useCallback(() => setHovered(state => [...state, ref.current]), [])
        const onPointerOut = useCallback(() => setHovered(state => state.filter(mesh => mesh !== ref.current)), [])
        return { ref, onPointerOver, onPointerOut }
    }
    const Outline = ({ children }) => {
        const { gl, scene, camera, size } = useThree()
        const composer = useRef()
        const [hovered, set] = useState([])
        const aspect = useMemo(() => new THREE.Vector2(size.width, size.height), [size])
        extend({ OrbitControls, EffectComposer, RenderPass, OutlinePass, ShaderPass })
        useEffect(() => composer.current.setSize(size.width, size.height), [size])
  useFrame(() => composer.current.render(), 1)
  return (
    <context.Provider value={set}>
      {children}
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" args={[scene, camera]} />
        <outlinePass
          attachArray="passes"
          args={[aspect, scene, camera]}
          selectedObjects={hovered}
          visibleEdgeColor="white"
          edgeStrength={50}
          edgeThickness={1}
        />
        <shaderPass attachArray="passes" args={[FXAAShader]} uniforms-resolution-value={[1 / size.width, 1 / size.height]} />
      </effectComposer>
    </context.Provider>
  )
}

export default Outline