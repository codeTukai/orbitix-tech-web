import { motion } from "framer-motion";
import { navLinks } from "./navLinks";

function MobileMenu({ open, setOpen }) {
  if (!open) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
      }}
      className="
      lg:hidden
      bg-white
      shadow-xl
      rounded-2xl
      mt-4
      p-6
    "
    >
      {navLinks.map((item) => (
        <a
          key={item.id}
          href={item.href}
          onClick={() => setOpen(false)}
          className="
          block
          py-4
          border-b
          last:border-none
        "
        >
          {item.name}
        </a>
      ))}
    </motion.div>
  );
}

export default MobileMenu;