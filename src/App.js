import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import Ground from "./components/ground.js";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
// import { Routes, Route } from "react-router-dom";
// import Wolf from "./components/wolf.js";
// import Tower from "./components/tower.js";
// import Moon from "./components/moon.js";
import Crystal from "./components/crystal.js";

let newTarget = [0, 0.35, 0];

const Vexoid = () => {
  return (
    <>
      <OrbitControls
        target={newTarget}
        maxPolarAngle={10}
        enablePan={true}
        PanSpeed={0.5}
      />
      <PerspectiveCamera makeDefault fov={40} position={[0, 70, 5]} />
      <color args={[0, 0, 0]} attach="background" />
      {/* <Tower />
      <Moon /> */}
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
    <Suspense fallback={null}>
      {/* <Routes>
        <Route path="/about">
        <Route path="/about" element={<about />}/>
        </Route>
      </Routes> */}
      <Canvas shadows>
        <p>Hello World</p>
        <Vexoid />
      </Canvas>
    </Suspense>
  );
};

export default App;
