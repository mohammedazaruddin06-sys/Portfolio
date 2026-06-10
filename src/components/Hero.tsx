"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Framer motion variants for staggering text
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 50, rotateX: -20 },
    show: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a]">
      {/* Background ambient light - Executive Palette (Warm Amber & Slate) */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-slate-400/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 pt-20">
        
        {/* Left Content: Typography */}
        <motion.div 
          style={{ y: yText, opacity: opacityText }}
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="flex-1 text-left"
        >
          <motion.div variants={itemVars} className="flex items-center gap-3 mb-8">
            <div className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </div>
            <span className="text-emerald-400 text-sm font-semibold tracking-wide uppercase">
              Actively Seeking Opportunities
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVars} className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Senior BI & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-600">
              Analytics Leader.
            </span>
          </motion.h1>

          <motion.p variants={itemVars} className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl leading-relaxed mb-10">
            Hi, I&apos;m Mohammed Azaruddin. A dedicated professional with 10+ years of experience scaling operations and building enterprise intelligence platforms at Amazon and Concentrix.
          </motion.p>

          <motion.div variants={itemVars} className="flex flex-wrap gap-4">
            <a href="#experience" className="px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-full hover:scale-105 hover:bg-amber-400 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              View My Experience
            </a>
            <a href="mailto:mohammedazaruddin06@gmail.com" className="px-8 py-4 border border-slate-500 text-white font-bold rounded-full hover:bg-slate-800 transition-colors duration-300">
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content: Portrait */}
        <motion.div 
          className="flex-1 relative w-full max-w-[500px] lg:max-w-[600px] aspect-square rounded-[2rem] overflow-hidden shadow-2xl shadow-amber-900/20 border border-slate-700/50"
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{ transformPerspective: 1000 }}
        >
          {/* Glass Overlay for aesthetics */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent pointer-events-none" />
          
          <motion.div style={{ scale: scaleImage, y: yImage }} className="w-full h-full bg-slate-900/50">
            <Image
              src="/profile.jpg"
              alt="Mohammed Azaruddin"
              fill
              className="object-contain p-4 lg:p-8"
              priority
            />
          </motion.div>

          {/* Floating UI Element over image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-8 z-20 bg-slate-900/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-slate-700 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
              <span className="text-amber-400 font-bold">10+</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Years Experience</p>
              <p className="text-slate-400 text-xs">Enterprise Operations</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500 uppercase tracking-widest font-mono">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent" />
      </motion.div>
    </section>
  );
}
