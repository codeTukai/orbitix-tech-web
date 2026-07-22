import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="group">
      <div
        className="
          relative
          flex
          items-center
          justify-center
          w-52
          h-24
          rounded-3xl
          bg-white/80
          backdrop-blur-xl
          border
          border-white/40
          shadow-[0_20px_50px_rgba(0,0,0,0.12)]
          transition-all
          duration-500
          group-hover:-translate-y-1
          group-hover:scale-105
          group-hover:shadow-[0_30px_70px_rgba(37,99,235,0.30)]
          overflow-hidden
        "
      >
        {/* Blue Glow */}
        <div
          className="
            absolute
            -top-10
            -left-10
            w-28
            h-28
            bg-blue-500/20
            rounded-full
            blur-3xl
          "
        />

        {/* Cyan Glow */}
        <div
          className="
            absolute
            -bottom-10
            -right-10
            w-28
            h-28
            bg-cyan-400/20
            rounded-full
            blur-3xl
          "
        />

        <img
          // src="/logo.png"
          src="/Logo2.png"
          alt="Orbitix Technology"
          className="
            relative
            z-10
            h-20
            w-auto
            object-contain
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />
      </div>
    </Link>
  );
}

export default Logo;