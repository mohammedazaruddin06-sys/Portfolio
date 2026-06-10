"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Activity, Network } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "CSAT Verbatim Classifier",
    category: "Machine Learning Pipeline",
    description: "A high-performance ML pipeline built to automate text classification for enterprise customer feedback. Uses a Soft-Voting Ensemble (XGBoost, LightGBM, SVC) with SMOTE for imbalance handling, feeding directly into Power BI.",
    tags: ["Python", "scikit-learn", "XGBoost", "spaCy", "Power BI"],
    github: "https://github.com/mohammedazaruddin06-sys/csat-verbatim-classifier",
    icon: <Network className="text-amber-400" size={32} />
  },
  {
    id: 2,
    title: "Enterprise Performance Engine",
    category: "BI Infrastructure",
    description: "End-to-end reporting suite built on Microsoft Fabric and Power BI. Centralises CSAT, AHT, and concurrency metrics for leadership, providing pre- vs post-change analytics and real-time operational visibility.",
    tags: ["Microsoft Fabric", "SQL", "Power BI", "Data Modelling"],
    icon: <Activity className="text-amber-500" size={32} />
  }
];

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  github?: string;
  icon: React.ReactNode;
}

function TiltCard({ project, index }: { project: Project; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      style={{ perspective: 1200 }}
      className="w-full h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="w-full h-full rounded-[2rem] bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 p-10 relative cursor-pointer"
      >
        <div style={{ transform: "translateZ(50px)" }} className="absolute -top-6 -right-6 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full" />
        
        <div style={{ transform: "translateZ(75px)" }} className="mb-8 p-4 bg-slate-800/80 inline-block rounded-2xl border border-slate-700">
          {project.icon}
        </div>

        <h3 style={{ transform: "translateZ(60px)" }} className="text-3xl font-bold text-white mb-2">
          {project.title}
        </h3>
        <p style={{ transform: "translateZ(40px)" }} className="text-amber-500 font-mono text-sm tracking-widest mb-6">
          {project.category}
        </p>
        
        <p style={{ transform: "translateZ(30px)" }} className="text-slate-400 text-lg leading-relaxed mb-8">
          {project.description}
        </p>

        <div style={{ transform: "translateZ(40px)" }} className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300">
              {tag}
            </span>
          ))}
        </div>

        <div style={{ transform: "translateZ(50px)" }} className="flex items-center gap-4 mt-auto">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-900 bg-amber-500 hover:bg-amber-400 transition-colors px-6 py-3 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <span className="font-semibold">Repository</span>
            </a>
          )}
          <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors px-4 py-3">
            <ExternalLink size={20} />
            <span className="font-semibold">Details</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-amber-500 font-mono tracking-widest uppercase text-sm block mb-4">Architecture & Code</span>
          <h2 className="text-5xl md:text-7xl font-bold text-white">Featured Work.</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          {projects.map((project, index) => (
            <TiltCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
