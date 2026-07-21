function Logo() {
  return (
    <a
      href="#home"
      className="flex items-center gap-3"
    >
      <img
        src="/logo.png"
        alt="Orbitix Technology Logo"
        className="w-auto h-24 object-contain"
      />
    </a>
  );
}

export default Logo;