function FooterTopCTA() {
  return (
    <section className="mb-20">

      <div
        className="
        rounded-3xl
        bg-gradient-to-r
        from-blue-700
        via-cyan-600
        to-blue-500
        p-10
        text-center
        shadow-2xl
      "
      >

        <h2 className="text-4xl font-black text-white">
          Ready to Build Your Future?
        </h2>

        <p className="text-blue-100 mt-4 max-w-2xl mx-auto">
          Join thousands of students learning Website
          Development, Software Engineering,
          AI, Robotics and Digital Marketing.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">

          <input
            type="email"
            placeholder="Enter your Email"
            className="
            md:w-96
            px-6
            py-4
            rounded-xl
            text-black
            outline-none
          "
          />

          <button
            className="
            bg-white
            text-blue-700
            font-bold
            px-8
            rounded-xl
            hover:scale-105
            duration-300
          "
          >
            Enroll Now →
          </button>

        </div>

      </div>

    </section>
  );
}

export default FooterTopCTA;