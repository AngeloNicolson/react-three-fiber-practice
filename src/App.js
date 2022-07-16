import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import Ground from "./components/ground.js";
import {
  OrbitControls,
  PerspectiveCamera,
  Text,
  Html,
} from "@react-three/drei";
import Crystal from "./components/crystal.js";
import Overlay from "./components/overlay.js";
import Moon from "./components/moon.js";
let newTarget = [0, 20, 0];

const Vexoid = () => {
  return (
    <>
      <OrbitControls
        target={newTarget}
        maxPolarAngle={10}
        enablePan={true}
        PanSpeed={0.5}
      />
      <PerspectiveCamera
        makeDefault
        fov={40}
        position={[-2, 0.5, 137]}
        rotation={[0.2, -0.1, 0]}
      />
      <color args={[0, 0, 0]} attach="background" />

      <Crystal />
      <pointLight
        position={[-30, 70, 100]}
        color={[0.2, 0.7, 0.3]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        position={[-5, 5, 20]}
        color={[0.2, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        position={[-50, 1, 10]}
        color={[0.2, 1, 1]}
        intensity={2}
        angle={0.9}
        penumbra={0.5}
        castShadow
        shadow-bias={-0.0001}
      />
      <Ground />
    </>
  );
};

const App = () => {
  return (
    <>
      <div>
        <p className="header">Div Angelo</p>
        <Overlay />
      </div>
      <Canvas shadows>
        <Text
          scale={[10, 10, 10]}
          color="white" // default
          anchorX="center" // default
          anchorY="middle" // default
        >
          Text Angelo
        </Text>
        <Html className="LandingPageText" transform={(20, 50, 0)}>
          Html Angelo
        </Html>
        <Suspense fallback={null}>
          <Moon />
          <axesHelper scale={40} />
          <Vexoid />
        </Suspense>
      </Canvas>
    </>
  );
};

export default App;
