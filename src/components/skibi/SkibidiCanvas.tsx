"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const SkibidiCanvas = () => {
  const skibidi = useGLTF("/skibidi/scene.gltf");

  return (
    <Canvas
      frameloop="demand"
      camera={{
        position: [0, 40, 5],
        fov: 25,
        near: 0.1,
        far: 1000,
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <OrbitControls
        autoRotateSpeed={5}
        autoRotate
        enableZoom={true}
        maxDistance={20}
        minDistance={2}
        enablePan={true}
        enableRotate={true}
      />
      <primitive object={skibidi.scene} scale={2} position={[0, -1, 0]} />
    </Canvas>
  );
};

export default SkibidiCanvas;
