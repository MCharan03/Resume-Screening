'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className, ...props }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for the tilt - "Heavy" feel
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);
  
  // Highlight gradient movement
  const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;

    const xPct = mouseXFromCenter / width;
    const yPct = mouseYFromCenter / height;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={twMerge(
        "relative rounded-3xl transition-all duration-200 ease-out will-change-transform",
        className
      )}
      {...props as any}
    >
      <div 
        style={{ transform: "translateZ(20px)" }} // Pop content out slightly
        className="relative z-10 w-full h-full"
      >
        {children}
      </div>

      {/* Glass Background Layer */}
      <div className="absolute inset-0 rounded-3xl glass pointer-events-none" />

      {/* Dynamic Glare/Reflection Layer */}
      <motion.div
        style={{
          background: useTransform(
            [glareX, glareY],
            ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.2) 0%, transparent 80%)`
          ),
          opacity: useTransform(mouseX, [-0.5, 0.5], [0, 1]) // Fade in glare only when active could be cool, but constant is better for glass
        }}
        className="absolute inset-0 z-20 rounded-3xl pointer-events-none mix-blend-overlay"
      />
    </motion.div>
  );
}
