import { motion } from "framer-motion";

function AboutCard({ feature, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 duration-300"
    >
      <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl mb-5">
        🚀
      </div>

      <h3 className="text-xl font-bold mb-3">
        {feature.title}
      </h3>

      <p className="text-gray-600">
        {feature.description}
      </p>
    </motion.div>
  );
}

export default AboutCard;