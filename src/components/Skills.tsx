"use client";

import { motion } from "framer-motion";

const tools = [
  "Power BI", "SQL", "Microsoft Fabric", "Python", "XGBoost", "LightGBM", 
  "Tableau", "Salesforce CRM", "AWS Lambda", "Azure Synapse", "Data Modelling",
  "ETL Pipelines", "DAX", "Predictive Analytics", "Machine Learning"
];

export default function Skills() {
  return (
    <section className="py-24 bg-slate-950 overflow-hidden border-y border-slate-800">
      <div className="container mx-auto px-6 mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 tracking-widest uppercase text-sm font-mono"
        >
          Core Technologies & Infrastructure
        </motion.h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-950 to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-950 to-transparent z-10" />

        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap gap-12 px-6 items-center"
        >
          {/* Double the array for seamless infinite scroll */}
          {[...tools, ...tools, ...tools].map((tool, index) => (
            <div 
              key={index}
              className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-500 hover:from-amber-400 hover:to-amber-600 transition-all duration-300 cursor-default"
            >
              {tool}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
