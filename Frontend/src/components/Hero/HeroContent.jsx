import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="z-10"
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 mb-6">
        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>

        <span className="text-sm font-semibold text-blue-700">
          Building Future with Technology
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-5xl lg:text-7xl font-black leading-tight text-slate-900">
        We Build
        <br />

        <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
          Websites,
        </span>

        <br />

        Apps & AI
      </h1>

      {/* Paragraph */}

      <p className="mt-8 text-lg text-gray-600 max-w-xl leading-8">
        Orbitix Technology helps startups, businesses and educational
        institutions build powerful websites, mobile applications, AI
        solutions, robotics systems and digital experiences.
      </p>

      <HeroButtons />

      <HeroStats />
    </motion.div>
  );
}

export default HeroContent;