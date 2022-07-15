import { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

const Wolf = () => {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/models/Prowlers/WolfModel.gltf"
  );

  useEffect(() => {
    gltf.scene.scale.set(20, 20, 20);
    gltf.scene.position.set(0, -0.035, 0);
    gltf.scene.rotation.set(1.55, 0, 0);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShdow = true;
        object.recieiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);
  return <primitive object={gltf.scene} />;
};

export default Wolf;
