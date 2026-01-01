'use client';

import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Suspense } from 'react';

interface SceneProps {
  children: React.ReactNode;
}

export default function Scene({ children }: SceneProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]} // Support high-DPI screens for crispness
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Environment preset="city" /> {/* "City" gives that nice Apple-like studio reflection */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
