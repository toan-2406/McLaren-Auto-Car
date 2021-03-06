/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: OneSteven (https://sketchfab.com/Steven007)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/mclaren-mp4-12c-a53f76d67c3a4184896a47a1af9e07d1
title: McLaren MP4-12C
*/

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const group1 = useRef();
  const { nodes, materials } = useGLTF("/mclaren_mp4.gltf");

  useEffect(() => {
    if ( window.innerWidth < 576) {
      group1.current.scale.set(0.003, 0.003, 0.003);
    } else if ( window.innerWidth < 768) {
      group1.current.scale.set(0.004, 0.004, 0.004);
    }
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-1.5, 0, 0]} scale={0.005} ref={group1}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[210.23, -88.72, 249.99]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.cal_object001_Material019_0.geometry}
              material={nodes.cal_object001_Material019_0.material}
            />
          </group>
          <group position={[0.04, 41.15, -474.36]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.object010_object072_None_0.geometry}
              material={materials.None}
            />
          </group>
          <group position={[0, -10.28, 429.04]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.object011_object071_Material024_0.geometry}
              material={materials["Material.024"]}
            />
          </group>
          <group position={[-0.04, 31.3, -480.16]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.object007_object073_Material004_0.geometry}
              material={materials["Material.004"]}
            />
          </group>
          <group position={[0, -9.5, 423.29]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.object012_object064_Material023_0.geometry}
              material={materials["Material.023"]}
            />
          </group>
          <group position={[-193.51, -76.77, -348.69]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.wheel001_object008_Material016_0.geometry}
              material={nodes.wheel001_object008_Material016_0.material}
            />
            <mesh
              geometry={nodes.wheel001_object008_Material015_0.geometry}
              material={nodes.wheel001_object008_Material015_0.material}
            />
            <mesh
              geometry={nodes.wheel001_object008_Material014_0.geometry}
              material={nodes.wheel001_object008_Material014_0.material}
            />
            <mesh
              geometry={nodes.wheel001_object008_Material012_0.geometry}
              material={nodes.wheel001_object008_Material012_0.material}
            />
            <mesh
              geometry={nodes.wheel001_object008_Material011_0.geometry}
              material={nodes.wheel001_object008_Material011_0.material}
            />
            <mesh
              geometry={nodes.wheel001_object008_Material009_0.geometry}
              material={nodes.wheel001_object008_Material009_0.material}
            />
          </group>
          <group scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.object016_Material005_0.geometry}
              material={nodes.object016_Material005_0.material}
            />
          </group>
          <group position={[0, 12.98, -507.78]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.object001_object065_Material013_0.geometry}
              material={materials["Material.013"]}
            />
          </group>
          <group position={[0, -96.08, -518]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.object008_object063_Material025_0.geometry}
              material={materials["Material.025"]}
            />
          </group>
          <group position={[195.79, -75.95, -303.7]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.cal003_object009_Material019_0.geometry}
              material={nodes.cal003_object009_Material019_0.material}
            />
          </group>
          <group position={[0, -1.56, -309.52]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.object003_grill_0.geometry}
              material={materials.grill}
            />
          </group>
          <group position={[0, 69.48, -32.4]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.object032_object069_Material001_0.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              geometry={nodes.object032_object069_Material027_0.geometry}
              material={materials["Material.027"]}
            />
          </group>
          <group position={[0, -12.11, -0.07]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.object005_Material007_0.geometry}
              material={nodes.object005_Material007_0.material}
            />
          </group>
          <group position={[0, -36.35, -66.1]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.object006_object038_Material022_0.geometry}
              material={materials["Material.022"]}
            />
          </group>
          <group position={[193.51, -76.77, -348.69]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.wheel003_object010_Material016_0.geometry}
              material={nodes.wheel003_object010_Material016_0.material}
            />
            <mesh
              geometry={nodes.wheel003_object010_Material015_0.geometry}
              material={nodes.wheel003_object010_Material015_0.material}
            />
            <mesh
              geometry={nodes.wheel003_object010_Material014_0.geometry}
              material={nodes.wheel003_object010_Material014_0.material}
            />
            <mesh
              geometry={nodes.wheel003_object010_Material012_0.geometry}
              material={nodes.wheel003_object010_Material012_0.material}
            />
            <mesh
              geometry={nodes.wheel003_object010_Material011_0.geometry}
              material={nodes.wheel003_object010_Material011_0.material}
            />
            <mesh
              geometry={nodes.wheel003_object010_Material009_0.geometry}
              material={nodes.wheel003_object010_Material009_0.material}
            />
          </group>
          <group position={[0, 52.13, 121.41]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.object026_object070_Material010_0.geometry}
              material={materials["Material.010"]}
            />
          </group>
          <group position={[0, 44.18, -483.29]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.object004_object057_Material007_0.geometry}
              material={nodes.object004_object057_Material007_0.material}
            />
            <mesh
              geometry={nodes.object004_object057_Material028_0.geometry}
              material={materials["Material.028"]}
            />
            <mesh
              geometry={nodes.object004_object057_Material005_0.geometry}
              material={nodes.object004_object057_Material005_0.material}
            />
            <mesh
              geometry={nodes.object004_object057_Material002_0.geometry}
              material={nodes.object004_object057_Material002_0.material}
            />
            <mesh
              geometry={nodes.object004_object057_Material017_0.geometry}
              material={nodes.object004_object057_Material017_0.material}
            />
            <mesh
              geometry={nodes.object004_object057_Material026_0.geometry}
              material={nodes.object004_object057_Material026_0.material}
            />
          </group>
          <group position={[0, -10.77, 427.32]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.object014_object062_Material026_0.geometry}
              material={nodes.object014_object062_Material026_0.material}
            />
          </group>
          <group position={[0, -3.99, 4.12]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.object015_object047_cb_0.geometry}
              material={materials.material}
            />
          </group>
          <group position={[0, -9.49, 423.99]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.object013_object042_Material003_0.geometry}
              material={materials["Material.003"]}
            />
          </group>
          <group position={[0, -11.7, 59.64]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.object000_object074_Material021_0.geometry}
              material={materials["Material.021"]}
            />
          </group>
          <group position={[-210.05, -75.95, -303.7]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.cal002_object007_Material019_0.geometry}
              material={nodes.cal002_object007_Material019_0.material}
            />
          </group>
          <group position={[0, -27.08, -17.98]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.object027_object068_Material002_0.geometry}
              material={nodes.object027_object068_Material002_0.material}
            />
          </group>
          <group position={[0, 59.68, -101.34]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.object009_object067_Material017_0.geometry}
              material={nodes.object009_object067_Material017_0.material}
            />
          </group>
          <group position={[195.38, -83.51, 287.8]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.wheel002_object_Material016_0.geometry}
              material={nodes.wheel002_object_Material016_0.material}
            />
            <mesh
              geometry={nodes.wheel002_object_Material015_0.geometry}
              material={nodes.wheel002_object_Material015_0.material}
            />
            <mesh
              geometry={nodes.wheel002_object_Material014_0.geometry}
              material={nodes.wheel002_object_Material014_0.material}
            />
            <mesh
              geometry={nodes.wheel002_object_Material012_0.geometry}
              material={nodes.wheel002_object_Material012_0.material}
            />
            <mesh
              geometry={nodes.wheel002_object_Material011_0.geometry}
              material={nodes.wheel002_object_Material011_0.material}
            />
            <mesh
              geometry={nodes.wheel002_object_Material009_0.geometry}
              material={nodes.wheel002_object_Material009_0.material}
            />
          </group>
          <group position={[-198.84, -88.72, 247.05]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.cal001_object006_Material019_0.geometry}
              material={nodes.cal001_object006_Material019_0.material}
            />
          </group>
          <group position={[-9.55, 30.69, -261.47]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.object017_object066_Material020_0.geometry}
              material={materials["Material.020"]}
            />
            <mesh
              geometry={nodes.object017_object066_Material018_0.geometry}
              material={materials["Material.018"]}
            />
            <mesh
              geometry={nodes.object017_object066_Material008_0.geometry}
              material={materials["Material.008"]}
            />
            <mesh
              geometry={nodes.object017_object066_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group position={[-195.49, -83.51, 289.33]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.wheel000_object002_Material016_0.geometry}
              material={nodes.wheel000_object002_Material016_0.material}
            />
            <mesh
              geometry={nodes.wheel000_object002_Material015_0.geometry}
              material={nodes.wheel000_object002_Material015_0.material}
            />
            <mesh
              geometry={nodes.wheel000_object002_Material014_0.geometry}
              material={nodes.wheel000_object002_Material014_0.material}
            />
            <mesh
              geometry={nodes.wheel000_object002_Material012_0.geometry}
              material={nodes.wheel000_object002_Material012_0.material}
            />
            <mesh
              geometry={nodes.wheel000_object002_Material011_0.geometry}
              material={nodes.wheel000_object002_Material011_0.material}
            />
            <mesh
              geometry={nodes.wheel000_object002_Material009_0.geometry}
              material={nodes.wheel000_object002_Material009_0.material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/mclaren_mp4.gltf");
