import logo from "../../assets/logo.png";

function FooterLogo() {
  return (
    <div>
      <img
        src={logo}
        alt="Orbitix Technology"
        className="w-60"
      />

      <p className="text-slate-400 leading-7 mt-4 py-6">
        Orbitix Technology is committed to helping students,
        startups, and businesses with modern software
        development, AI solutions, robotics, digital
        marketing, and career-focused education.
      </p>
    </div>
  );
}

export default FooterLogo;