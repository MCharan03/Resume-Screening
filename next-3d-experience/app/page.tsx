'use client';

import ParticleSphere from './components/3d/ParticleSphere';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#050511]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a40_0%,_#000000_100%)] opacity-50 z-0 pointer-events-none" />

      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h2 className="text-[25vw] font-black text-white/[0.03] leading-none whitespace-nowrap">
          TIME MATTERS
        </h2>
      </div>

      {/* 3D Scene */}
      <ParticleSphere />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center leading-[0.9] tracking-tighter"
        >
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] text-white font-light">
              Building <span className="font-bold italic">Digital</span>
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] text-white font-light">
              <span className="font-bold italic">Solutions</span> That Matter
            </h1>
        </motion.div>

        <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 left-12 text-gray-400 text-sm md:text-lg max-w-sm text-left border-l border-white/20 pl-4"
        >
          A tool that turns complex challenges <br />
          into elegant digital outcomes.
        </motion.p>
      </div>
    </main>
  );
}
