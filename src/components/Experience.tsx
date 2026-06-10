"use client";

import { motion } from "framer-motion";

const workHistory = [
  {
    role: "Lead Business Intelligence & Analytics Specialist",
    company: "Concentrix - UK",
    date: "06/2024 - Present",
    bullets: [
      "Built and own a Power BI enterprise reporting suite for CSAT, AHT, concurrency, transfers, quality and training.",
      "Delivered pre- vs post-change analytics for AVD migrations, queue moves and training waves, quantifying 5–10% shifts.",
      "Automated weekly and monthly reporting pipelines using SQL, Microsoft Fabric, Excel and Power BI, cutting manual effort by 60%+.",
      "Developed predictive models for call volume and resource planning, improving forecast accuracy by 10–15%."
    ]
  },
  {
    role: "Customer Experience Manager (Operations & Analytics)",
    company: "Concentrix - UK",
    date: "10/2023 - 06/2024",
    bullets: [
      "Led a customer experience team, delivering around 20% improvement in overall performance through data-driven coaching.",
      "Improved CSAT by approximately 30% by optimising SLAs, refining workflows and supporting personalised service.",
      "Built and monitored Salesforce dashboards for compliance, quality and issue resolution.",
      "Reduced response times by around 20% by automating key workflows and redesigning escalation paths."
    ]
  },
  {
    role: "Operations & Risk Manager – Analytics & Automation",
    company: "Amazon - India",
    date: "09/2019 - 08/2023",
    bullets: [
      "Delivered $34,000 in annual cost savings by implementing AI-driven automation across catalogue and risk workflows.",
      "Built predictive risk and compliance dashboards, improving compliance by around 40%.",
      "Designed real-time BI dashboards for fraud, risk and operational performance to support faster decision-making.",
      "Led cross-functional automation programmes, delivering 20%+ efficiency gains."
    ]
  },
  {
    role: "Customer Success Team Lead",
    company: "Amazon - India",
    date: "04/2016 - 09/2019",
    bullets: [
      "Increased customer satisfaction by 15% and productivity by 20% through targeted coaching.",
      "Performed root-cause and pilot data analysis to identify process issues and recommend policy changes.",
      "Delivered insight-led coaching and performance management using KPIs and quality data."
    ]
  },
  {
    role: "Support Analyst & Trainer",
    company: "Sutherland / Omega Healthcare - India",
    date: "08/2013 - 10/2015",
    bullets: [
      "Improved claims quality and reduced processing delays by analysing recurring issues and refining workflows.",
      "Trained new hires on systems, workflows and quality standards, helping them reach full productivity faster.",
      "Identified and resolved billing and service workflow issues, reducing recurring errors."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-[#0f172a] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-amber-500 font-mono tracking-widest uppercase text-sm block mb-4">Professional History</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Career Trajectory</h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Center Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-700 -translate-x-1/2" />
          
          <div className="space-y-12">
            {workHistory.map((job, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100, rotateX: 20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                  style={{ transformPerspective: 1500 }}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-[#0f172a] border-4 border-amber-500 -translate-x-1/2 z-10 hidden md:block" />
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'} relative mt-8 md:mt-0`}>
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl hover:border-amber-500/50 transition-colors duration-300">
                      <span className="text-amber-400 font-mono text-sm tracking-widest block mb-2">{job.date}</span>
                      <h4 className="text-2xl font-bold text-white mb-1">{job.role}</h4>
                      <h5 className="text-slate-400 font-medium mb-6">{job.company}</h5>
                      <ul className="space-y-3">
                        {job.bullets.map((bullet, i) => (
                          <li key={i} className="text-slate-300 text-sm font-light leading-relaxed flex items-start gap-3">
                            <span className="text-amber-500 mt-1 shrink-0">✓</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
