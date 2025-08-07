'use client';
import { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface ThreeJSCarViewerProps {
  carModel: string;
  wrapColor: string;
}

export default function ThreeJSCarViewer({ carModel, wrapColor }: ThreeJSCarViewerProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Load GLTF model
  const { scene } = useGLTF(`/ ${carModel}.glb`, true); // Note: Fix the space in path
  useEffect(() => {
    if (groupRef.current && scene) {
      // Apply wrap color
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material.color.set(wrapColor === 'Matte Black' ? 0x1A1A1A : wrapColor === 'Gloss Yellow' ? 0xFFC107 : 0xC0C0C0);
          child.material.needsUpdate = true;
        }
      });
      groupRef.current.add(scene);
    }
  }, [carModel, wrapColor, scene]);

  return (
    <Canvas
      camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={1} />
      <group ref={groupRef}>
        {/* Model is added via useEffect */}
        <mesh position={[0, -1, 0]} scale={[0.5, 0.5, 0.5]}>
          {/* Placeholder if model fails to load */}
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="gray" />
        </mesh>
      </group>
      <OrbitControls enableDamping dampingFactor={0.05} />
    </Canvas>
  );
}

// Preload GLTF models to avoid initial load delays
useGLTF.preload('/bmw.glb');
useGLTF.preload('/camaro.glb');
useGLTF.preload('/dodge-challenger.glb');
useGLTF.preload('/ford-mustang.glb');
useGLTF.preload('/honda-accord.glb');
useGLTF.preload('/lexus.glb');
useGLTF.preload('/mercedes-benz-Sclass.glb');
useGLTF.preload('/mercedes-benz_maybach.glb');
useGLTF.preload('/mercedes-Eclass.glb');
useGLTF.preload('/mercedes-benz-Gwagon.glb');
useGLTF.preload('/mini-cooper.glb');
useGLTF.preload('/toyota-gt86.glb');