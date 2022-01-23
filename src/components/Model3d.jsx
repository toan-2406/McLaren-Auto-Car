import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Stars,
  SpotLight,
  Preload,
  Loader,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

import McLaren from "./Mclaren_mp4";

const Model3d = () => {
  return (
    <>
      <Canvas className="canvas" dpr={[1.5, 2]} linear shadows>
        <fog attach="fog" args={["#272730", 16, 30]} />
        <OrbitControls autoRotate enablePan={false} enableZoom={false} />
        <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={20}>
          <pointLight intensity={1} position={[-10, -25, -10]} />
          <spotLight
            castShadow
            intensity={2.25}
            angle={0.2}
            penumbra={1}
            position={[-25, 20, -15]}
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={1} position={[-2, 5, 2]} />
        <spotLight
          intensity={0.5}
          angle={0.2}
          penumbra={1}
          position={[5, 15, 10]}
          shadow-bias={-0.0001}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />

        <Suspense fallback={null}>
          <McLaren />
          <Preload all />
        </Suspense>
        <Stars
          radius={20} // Radius of the inner sphere (default=100)
          depth={50} // Depth of area where stars should fit (default=50)
          count={5000} // Amount of stars (default=5000)
          factor={6} // Size factor (default=4)
          saturation={0} // Saturation 0-1 (default=0)
          fade={true} // Faded dots (default=false)
        />
        <SpotLight
          penumbra={0.5}
          position={[4, 2, 0]}
          intensity={0.5}
          angle={0.3}
          color="#fff"
          castShadow
        />
        <SpotLight
          penumbra={0.5}
          position={[-4, 2, 0]}
          intensity={0.3}
          angle={0.3}
          color="#fff"
          castShadow
        />
      </Canvas>
      <Loader />
    </>
  );
};

export default Model3d;
