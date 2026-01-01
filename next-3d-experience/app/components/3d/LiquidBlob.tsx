'use client';

import { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

export default function LiquidBlob() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const materialRef = useRef<any>(null!);
  const { viewport } = useThree();
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const { x, y } = state.pointer;

    // Target positions based on scroll
    // At scroll 0: Center
    // At scroll 1: Bottom Right
    const scrollX = scroll * (viewport.width / 3);
    const scrollY = -scroll * (viewport.height / 2);

    const targetX = (x * viewport.width) / 6 + scrollX;
    const targetY = (y * viewport.height) / 6 + scrollY;

    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY + Math.sin(t * 0.5) * 0.2, 0.05);
    
    // Morphing properties
    // Color: Blue -> Deep Purple/Indigo
    const color1 = new THREE.Color("#0071e3");
    const color2 = new THREE.Color("#5e5ce6");
    materialRef.current.color.lerpColors(color1, color2, scroll);
    
    // Distortion: High -> Low (becoming more solid)
    materialRef.current.distort = THREE.MathUtils.lerp(0.4, 0.2, scroll);
    
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -y * 0.5 + t * 0.1, 0.1);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x * 0.5 + t * 0.1, 0.1);
  });

  return (
    <Sphere args={[1, 64, 64]} ref={meshRef} scale={1.8}>
      <MeshDistortMaterial
        ref={materialRef}
        color="#0071e3" 
        attach="material"
        distort={0.4}
        speed={2} 
        roughness={0.1}
        metalness={0.2}
      />
    </Sphere>
  );
}
