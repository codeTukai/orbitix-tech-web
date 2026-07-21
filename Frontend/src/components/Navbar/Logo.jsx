function Logo() {
  return (
    <a
      href="#home"
      className="flex items-center gap-3"
    >
      <img
        src="/logo.png"
        alt="Orbitix Technology Logo"
        className="w-14 h-14 object-contain"
      />

      <div>
        <h2 className="text-2xl font-black">
          Orbitix
        </h2>

        <p className="text-sm text-blue-600 font-semibold">
          TECHNOLOGY
        </p>
      </div>
    </a>
  );
}

export default Logo;