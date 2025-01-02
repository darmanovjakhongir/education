import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import WhyUs from "../components/WhyUs";
import About from "../components/About";
import EnrollmentSteps from "../components/EnrollmentSteps";
import Programs from "../components/Programs";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div className="home">
      <Hero />
      <Statistics />
      <WhyUs />
      <About />
      <EnrollmentSteps />
      <Programs />
      <Testimonials />
    </div>
  );
};

export default Home;
