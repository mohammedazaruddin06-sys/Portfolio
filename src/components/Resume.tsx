"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, Database, LineChart, Award, GraduationCap } from "lucide-react";

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

export default function Resume() {
  return (
    <section className="relative z-20 bg-[#121212] py-24 px-4 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto text-white">
        
        {/* Header / Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 45 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformPerspective: 1000 }}
          className="mb-24 text-center border-b border-white/10 pb-16"
        >
          <span className="text-xs uppercase tracking-widest text-blue-400 mb-4 block">Interactive Resume</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Mohammed Azaruddin</h2>
          <p className="text-xl md:text-2xl text-blue-400 mb-8 font-light tracking-wide max-w-3xl mx-auto">
            Senior Business Intelligence & Analytics Leader driving operational efficiency through data-led decision making.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-400 font-light">
            <span className="glass px-4 py-2 rounded-full">📍 Flat 8, 15 Gylemuir Lane, Edinburgh, EH12 7FG</span>
            <span className="glass px-4 py-2 rounded-full">📱 +44 7587 719203</span>
            <span className="glass px-4 py-2 rounded-full">📧 mohammedazaruddin06@gmail.com</span>
            <a href="https://linkedin.com/in/azar141091" target="_blank" rel="noreferrer" className="glass px-4 py-2 rounded-full hover:bg-white/10 hover:text-white transition-all">
              🔗 linkedin.com/in/azar141091
            </a>
          </div>
        </motion.div>

        {/* 3D Skills Grid */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold tracking-tight">Technical Expertise</h3>
            <p className="text-gray-400 mt-2">Deep expertise across modern data architecture and cloud analytics.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -15, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              style={{ transformPerspective: 1200 }}
              className="glass p-8 rounded-3xl hover:border-blue-400/50 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <LineChart size={24} />
                </div>
                <h4 className="text-xl font-bold">BI & Analytics</h4>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Power BI, KPI & MI reporting dashboards, forecasting, predictive analytics, contact centre and CX analytics, workforce and capacity analytics, pre- and post-change impact analysis.
              </p>
              <div className="w-full bg-white/5 rounded-full h-2">
                <motion.div initial={{ width: 0 }} whileInView={{ width: "95%" }} transition={{ duration: 1.5, delay: 0.2 }} className="bg-blue-400 h-2 rounded-full"></motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 15, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.1 }}
              style={{ transformPerspective: 1200 }}
              className="glass p-8 rounded-3xl hover:border-blue-400/50 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <Database size={24} />
                </div>
                <h4 className="text-xl font-bold">Data & Integration</h4>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                SQL, Microsoft Fabric, data modelling, ETL, BI/MI architecture, data governance, reporting & workflow automation.
              </p>
              <div className="w-full bg-white/5 rounded-full h-2">
                <motion.div initial={{ width: 0 }} whileInView={{ width: "90%" }} transition={{ duration: 1.5, delay: 0.3 }} className="bg-purple-400 h-2 rounded-full"></motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -15, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
              style={{ transformPerspective: 1200 }}
              className="glass p-8 rounded-3xl hover:border-blue-400/50 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                  <Code size={24} />
                </div>
                <h4 className="text-xl font-bold">Programming & Tools</h4>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Python, Excel, Tableau, Domo, Salesforce, AWS (Lambda, Lex), Azure cloud architecture.
              </p>
              <div className="w-full bg-white/5 rounded-full h-2">
                <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} transition={{ duration: 1.5, delay: 0.4 }} className="bg-green-400 h-2 rounded-full"></motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 15, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.3 }}
              style={{ transformPerspective: 1200 }}
              className="glass p-8 rounded-3xl hover:border-blue-400/50 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                  <Briefcase size={24} />
                </div>
                <h4 className="text-xl font-bold">Business & Leadership</h4>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Data storytelling, stakeholder management, KPI standardisation, team leadership and mentoring, change support.
              </p>
              <div className="w-full bg-white/5 rounded-full h-2">
                <motion.div initial={{ width: 0 }} whileInView={{ width: "95%" }} transition={{ duration: 1.5, delay: 0.5 }} className="bg-orange-400 h-2 rounded-full"></motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 3D Timeline Work History */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold tracking-tight">Professional Trajectory</h3>
            <p className="text-gray-400 mt-2">Over a decade of driving operational efficiency and cost savings.</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
            
            <div className="space-y-12">
              {workHistory.map((job, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 100, rotateX: 30, rotateY: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                    style={{ transformPerspective: 1500 }}
                    className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-[#121212] border-4 border-blue-500 -translate-x-1/2 z-10 hidden md:block" />
                    
                    {/* Content Card */}
                    <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'} relative`}>
                      <div className="glass p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full" />
                        <span className="text-blue-400 font-mono text-sm tracking-widest">{job.date}</span>
                        <h4 className="text-2xl font-bold mt-2 text-white">{job.role}</h4>
                        <h5 className="text-gray-400 font-medium mt-1 mb-6">{job.company}</h5>
                        <ul className="space-y-3">
                          {job.bullets.map((bullet, i) => (
                            <li key={i} className="text-gray-300 text-sm font-light leading-relaxed flex items-start gap-3">
                              <span className="text-blue-500 mt-1">✓</span>
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

        {/* 3D Education & Certs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ transformPerspective: 1000 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-blue-400" size={28} />
              <h3 className="text-3xl font-bold tracking-tight">Education</h3>
            </div>
            <div className="glass p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h4 className="text-xl font-bold text-white mb-2">B.Com: Banking, Corporate & Finance</h4>
              <p className="text-blue-400">DG Vaishnav College - India | 2014</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ transformPerspective: 1000 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-purple-400" size={28} />
              <h3 className="text-3xl font-bold tracking-tight">Certifications</h3>
            </div>
            <div className="glass p-8 rounded-3xl relative overflow-hidden group space-y-6">
              <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h4 className="text-lg font-bold text-white mb-1">Microsoft Certified: Azure Administrator Associate</h4>
                <p className="text-purple-400 text-sm">Microsoft (AZ-900, AZ-104)</p>
              </div>
              <div className="relative z-10 border-t border-white/10 pt-6">
                <h4 className="text-lg font-bold text-white mb-1">Google Project Management</h4>
                <p className="text-purple-400 text-sm">Google / Coursera</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
