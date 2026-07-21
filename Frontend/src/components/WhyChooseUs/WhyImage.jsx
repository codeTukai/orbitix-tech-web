import { motion } from "framer-motion";


function WhyImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <motion.img
        
        alt="Orbitix Technology Team"
        className="
          w-full
          h-[650px]
          object-cover
          rounded-3xl
          shadow-2xl
        "
      />

      <div
        className="
          absolute
          bottom-8
          left-8
          bg-white
          rounded-3xl
          shadow-xl
          px-8
          py-6
          z-20
        "
      >
        <h2 className="text-5xl font-black text-blue-700">
  100+
</h2>

        <p className="text-gray-600 font-semibold">
          Projects Completed
        </p>
      </div>
    </motion.div>
  );
}

export default WhyImage;