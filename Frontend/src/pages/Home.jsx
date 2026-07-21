import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import WhyChoose from "../components/WhyChooseUs/WhyChoose";

import Roadmap from "../components/Roadmap";
import EnrollCTA from "../components/EnrollCTA/EnrollCTA";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Roadmap />
      <EnrollCTA />
    </>
  );
}

export default Home;