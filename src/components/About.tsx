"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={containerRef} className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Intro text */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
            I don&apos;t just build dashboards. <br/>
            <span className="text-slate-500">I deliver data solutions that drive measurable business value.</span>
          </h2>
          <p className="text-xl text-slate-400 font-light">
            With over a decade of experience as an employee and leader at Amazon and Concentrix, I specialise in transforming raw operational data into automated, predictive intelligence for my teams.
          </p>
        </motion.div>

        {/* Massive Typography Metrics */}
        <motion.div style={{ scale, opacity }} className="flex flex-col gap-24">
          
          <div className="flex flex-col md:flex-row items-center gap-12 justify-between">
            <div className="md:w-1/2">
              <h3 className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-amber-400 to-amber-900/20">
                $34k+
              </h3>
            </div>
            <div className="md:w-1/2">
              <h4 className="text-3xl font-bold text-white mb-4">Annual Cost Savings</h4>
              <p className="text-xl text-slate-400 font-light">
                Delivered at Amazon by implementing AI-driven automation across catalogue and risk workflows, drastically reducing manual processing overhead.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12 justify-between">
            <div className="md:w-1/2 text-right">
              <h3 className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-bl from-slate-400 to-slate-800/20">
                60%+
              </h3>
            </div>
            <div className="md:w-1/2 text-right md:text-left">
              <h4 className="text-3xl font-bold text-white mb-4">Effort Reduction</h4>
              <p className="text-xl text-slate-400 font-light">
                Achieved at Concentrix by automating weekly and monthly reporting pipelines using SQL, Microsoft Fabric, Excel, and Power BI.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 justify-between">
            <div className="md:w-1/2">
              <h3 className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-900/20">
                30%
              </h3>
            </div>
            <div className="md:w-1/2">
              <h4 className="text-3xl font-bold text-white mb-4">CSAT Improvement</h4>
              <p className="text-xl text-slate-400 font-light">
                Driven through data-led coaching, workflow refinement, and personalised service strategies, resulting in a massive boost to customer experience metrics.
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
