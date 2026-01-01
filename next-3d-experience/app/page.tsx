'use client';


import TiltCard from './components/ui/TiltCard';
import { ArrowRight, LayoutGrid, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen relative w-full overflow-hidden">
      


      {/* Content Wrapper */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 py-12 max-w-[1400px] mx-auto">
        
        {/* Navigation / Header */}
        <nav className="flex justify-between items-center mb-24">
          <div className="text-2xl font-semibold tracking-tight">Aura</div>
          <button className="px-5 py-2 rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-md border border-white/10 hover:bg-black/10 transition-colors text-sm font-medium">
            Get Started
          </button>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col items-start justify-center min-h-[60vh] mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 max-w-4xl"
          >
            <span className="text-shimmer">Fluidity</span> <br />
            <span className="text-black/40 dark:text-white/40">in Motion.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-xl mb-10 leading-relaxed"
          >
            Experience the next generation of web interfaces. 
            Blending the polish of glass with the nature of water.
          </motion.p>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <button className="group flex items-center gap-2 bg-[#0071e3] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:bg-[#0077ED] transition-all transform hover:scale-105 active:scale-95">
              Explore the Ecosystem
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </section>

        {/* Bento Grid Section */}
        <section className="mb-32">
          <div className="mb-12">
            <h2 className="text-4xl font-semibold tracking-tight mb-4">Designed for Focus.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
            {/* Large Card */}
            <TiltCard className="md:col-span-2 md:row-span-2 p-6 md:p-8 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500">
                  <LayoutGrid />
                </div>
                <h3 className="text-3xl font-semibold mb-2">Adaptive Layouts</h3>
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  Interfaces that reshape themselves based on context. 
                  Just like liquid fills a container, our UI fills your screen.
                </p>
              </div>
              <div className="w-full h-48 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl mt-8" />
            </TiltCard>

            {/* Tall Card */}
            <TiltCard className="flex flex-col justify-center items-center text-center p-6 md:p-8">
              <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mb-4 text-orange-500">
                <Zap />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Response</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                60fps animations powered by R3F and Lenis.
              </p>
            </TiltCard>

            {/* Small Card */}
            <TiltCard className="flex flex-col justify-center p-6 md:p-8">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 text-green-500">
                <Shield />
              </div>
              <h3 className="text-xl font-semibold">Privacy First</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Your data stays on device. Always.
              </p>
            </TiltCard>
          </div>
        </section>

        <footer className="py-12 border-t border-black/5 dark:border-white/5 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Aura Inc. Inspired by Apple & OneUI.</p>
        </footer>

      </div>
    </main>
  );
}