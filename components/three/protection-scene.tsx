"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Sphere } from "@react-three/drei";
import * as THREE from "three";

function Core() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.25;
      mesh.current.rotation.x += delta * 0.08;
    }
  });

  return (
    <Icosahedron ref={mesh} args={[1.35, 1]}>
      <meshStandardMaterial
        color="#16b364"
        roughness={0.18}
        metalness={0.35}
        flatShading
      />
    </Icosahedron>
  );
}

function Shell() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y -= delta * 0.12;
      mesh.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <Sphere ref={mesh} args={[2.1, 32, 32]}>
      <meshBasicMaterial
        color="#5be89b"
        wireframe
        transparent
        opacity={0.32}
      />
    </Sphere>
  );
}

function Traffic() {
  const group = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    const items: { position: [number, number, number]; scale: number }[] = [];
    const count = 14;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const r = 2.8;
      items.push({
        position: [
          r * Math.cos(theta) * Math.sin(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(phi),
        ],
        scale: 0.06 + (i % 3) * 0.03,
      });
    }
    return items;
  }, []);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.16;
      group.current.rotation.x -= delta * 0.06;
    }
  });

  return (
    <group ref={group}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <sphereGeometry args={[node.scale, 12, 12]} />
          <meshStandardMaterial
            color="#0f7a45"
            emissive="#1fd47e"
            emissiveIntensity={0.5}
            roughness={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ProtectionScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.4], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[4, 6, 5]} intensity={2.1} color="#ffffff" />
      <pointLight position={[-5, -3, -4]} intensity={2.4} color="#39e08a" />
      <pointLight position={[3, -4, 4]} intensity={1.4} color="#bdffd9" />
      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.9}>
        <Core />
        <Shell />
      </Float>
      <Traffic />
    </Canvas>
  );
}
