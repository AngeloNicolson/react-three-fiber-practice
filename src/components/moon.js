import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
// import { MeshReflectorMaterial } from "@react-three/drei";

const Moon = () => {
  const [roughness] = useLoader(TextureLoader, [
    process.env.PUBLIC_URL + "textures/moon/MOON.jpg",
  ]);

  return (
    <mesh position={[25, 60, -60]} rotation={[-1, 4.4, -1.6]}>
      <sphereGeometry args={[10, 77, 77]} />
      <meshStandardMaterial
        map={roughness}
        color={"white"}
        roughness={0.8}
        emissive={[0.2, 0.5, 1]}
        emissiveIntensity={0.01}
      />
    </mesh>
  );
};

export default Moon;
