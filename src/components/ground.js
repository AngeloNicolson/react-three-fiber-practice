import { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { LinearEncoding, RepeatWrapping, TextureLoader } from "three";
import { MeshReflectorMaterial } from "@react-three/drei";

const Ground = () => {
  const [roughness, normal] = useLoader(TextureLoader, [
    process.env.PUBLIC_URL + "textures/terrain-roughness.jpg",
    process.env.PUBLIC_URL + "textures/terrain-normal.jpg",
  ]);

  useEffect(() => {
    [roughness, normal].forEach((texture) => {
      texture.wrapS = RepeatWrapping;
      texture.wrapT = RepeatWrapping;
      texture.repeat.set(5, 5);
    });

    normal.encoding = LinearEncoding;
  }, [roughness, normal]);

  return (
    <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
      <planeGeometry args={[30, 30]} />
      <MeshReflectorMaterial
        envMapIntensity={0}
        normalMap={normal}
        normalScale={[0.15, 0.15]}
        roughnessMap={roughness}
        dithering={true}
        color={[0.015, 0.015, 0.015]}
        roughness={0.7}
      />
    </mesh>
  );
};

export default Ground;
