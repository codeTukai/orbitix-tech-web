import { motion } from "framer-motion";

function AboutContent() {
  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <span className="text-blue-600 font-semibold">
        ABOUT ORBITIX
      </span>

      <h2 className="text-5xl font-bold mt-4 leading-tight">
        We Build
        <span className="text-blue-600">
          {" "}Modern Digital Solutions
        </span>
      </h2>

      <p className="mt-8 text-gray-600 leading-8">
        Orbitix Technology provides Website Development,
        Software Development, AI Solutions, Robotics,
        Educational Coding, Mobile Apps and Digital Marketing
        under one roof.
      </p>

      <button className="mt-10 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 duration-300">
        Explore More
      </button>
    </motion.div>
  );
}

export default AboutContent;