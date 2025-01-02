import englishprogramsft from "../assets/images/english-programs.jpg";
import mathprograms from "../assets/images/math-programs.jpg";
import physicsprograms from "../assets/images/physics-programs.jpg";

function Programs() {
  return (
    <section id="programs" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl text-gray-800">
          <span className="font-bold text-blue-600">Our</span> Programs
        </h2>
        <p className="mt-4 text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.....
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="relative">
              <img
                src={englishprogramsft}
                alt="Students learning English in a classroom"
                className="w-full h-1/2 object-cover rounded-t-lg"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800">English Programs</h3>
              <p className="mt-2 text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley......
              </p>
              <a
                href="#"
                className="bg-yellow-400 font-bold text-gray-800 px-6 py-2 rounded focus:bg-yellow-500 focus:outline-none mt-4 inline-block"
                aria-label="Learn more about English Programs"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="p-6 bg-white shadow rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="relative">
              <img
                src={mathprograms}
                alt="Math lessons with students"
                className="w-full h-1/2 object-cover rounded-t-lg"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800">Math Programs</h3>
              <p className="mt-2 text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley......
              </p>
              <a
                href="#"
                className="bg-yellow-400 font-bold text-gray-800 px-6 py-2 rounded focus:bg-yellow-500 focus:outline-none mt-4 inline-block"
                aria-label="Learn more about Math Programs"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="p-6 bg-white shadow rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="relative">
              <img
                src={physicsprograms}
                alt="Physics experiments and lessons"
                className="w-full h-1/2 object-cover rounded-t-lg"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800">Physics Programs</h3>
              <p className="mt-2 text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley......
              </p>
              <a
                href="#"
                className="bg-yellow-400 font-bold text-gray-800 px-6 py-2 rounded focus:bg-yellow-500 focus:outline-none mt-4 inline-block"
                aria-label="Learn more about Physics Programs"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;
