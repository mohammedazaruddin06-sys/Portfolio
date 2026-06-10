"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  // Section 1: "My Name. Creative Developer." (0% to 25%)
  const opacity1 = useTransform(scrollProgress, [0, 0.1, 0.2, 0.25], [1, 1, 0, 0]);
  const y1 = useTransform(scrollProgress, [0, 0.2], ["0px", "-50px"]);

  // Section 2: "I build digital experiences." (30% to 55%)
  const opacity2 = useTransform(scrollProgress, [0.25, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollProgress, [0.25, 0.55], ["50px", "-50px"]);

  // Section 3: "Bridging design and engineering." (60% to 85%)
  const opacity3 = useTransform(scrollProgress, [0.55, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollProgress, [0.55, 0.9], ["50px", "-50px"]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-10 flex flex-col justify-center">
      
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
          Mohammed Azaruddin
        </h1>
        <p className="mt-4 text-xl md:text-3xl text-gray-300 font-light drop-shadow-lg">
          Business Intelligence & Analytics Leader
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-24"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-3xl drop-shadow-lg">
          Turning complex data into actionable insight.
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center px-8 md:px-24 text-right"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-2xl drop-shadow-lg">
          Bridging operations<br/>and analytics.
        </h2>
      </motion.div>

    </div>
  );
}
