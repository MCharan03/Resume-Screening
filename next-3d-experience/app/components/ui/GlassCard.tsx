'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({ children, className, hoverEffect = true, ...props }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // Apple-style spring curve approximation
      className={twMerge(
        "glass rounded-3xl p-6 md:p-8 relative overflow-hidden",
        hoverEffect && "transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98]",
        className
      )}
      {...props as any}
    >
      {/* Optional: Subtle glare effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
}
