import { FaRocket } from "react-icons/fa";

function Logo() {
  return (
    <a
      href="#home"
      className="flex items-center gap-3"
    >
      <div
        className="
        w-12
        h-12
        rounded-xl
        bg-gradient-to-r
        from-blue-600
        to-cyan-500
        flex
        items-center
        justify-center
        shadow-lg
      "
      >
        <FaRocket
          className="text-white text-xl"
        />
      </div>

      <div>
        <h2 className="font-black text-xl">
          Orbitix
        </h2>

        <p className="text-sm text-gray-500">
          Technology
        </p>
      </div>
    </a>
  );
}

export default Logo;