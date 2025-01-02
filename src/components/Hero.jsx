import background from "../assets/images/background.png";
import indianstudent from "../assets/images/indian-student.png";

function Hero() {
  return (
    <section id="hero" className="bg-gray-50 py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left relative z-10">
          <h2 className="text-4xl font-bold text-gray-800">
            Online{" "}
            <span className="text-blue-600">Learning you can access</span> any
            time easily!
          </h2>
          <p className="mt-4 text-gray-600 max-w-md mx-auto md:mx-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.....
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="bg-yellow-400 font-bold text-gray-800 px-6 py-2 rounded focus:bg-yellow-500 focus:outline-none hover:shadow-lg transition duration-300"
              aria-label="Join the course"
            >
              Join Course
            </a>
            <a
              href="#about"
              className="font-bold text-gray-600 underline hover:text-blue-600 transition duration-300"
              aria-label="See how it works"
            >
              See how it works?
            </a>
          </div>
        </div>
        <div
          className="absolute top-0 right-0 w-full h-full bg-yellow-200 z-0"
          style={{
            clipPath: "circle(70% at 75% 50%)",
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 relative z-10">
          <img
            src={indianstudent}
            alt="Indian student"
            className="rounded-lg max-w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
