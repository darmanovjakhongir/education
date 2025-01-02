import background from "../assets/images/background.png";
import woman from "../assets/images/woman.png";

function EnrollmentSteps() {
  const steps = [
    "Choose a Program",
    "Enroll and Submit Documents",
    "Choose a Date and Time",
    "Pick an Instructor",
    "Then Start",
  ];

  return (
    <section
      id="enrollmentsteps"
      className="relative bg-yellow-400 py-16 overflow-hidden"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 order-last md:order-first relative z-10">
          <img
            src={woman}
            alt="Woman"
            className="rounded-lg w-4/5 md:w-full object-cover"
          />
        </div>
        <div className="md:w-1/2 md:pl-12 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800">
            Effortless Enrollment
          </h2>
          <p className="mt-4 text-gray-700 text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <ul className="mt-6 space-y-6">
            {steps.map((step, index) => (
              <li
                key={index}
                className="flex items-center bg-white p-4 rounded-lg shadow-md transition-transform hover:scale-105"
              >
                <span className="font-bold text-yellow-400 text-2xl mr-4">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-gray-800 font-medium">| {step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="absolute top-0 left-0 w-1/2 h-full bg-blue-600"
        style={{
          clipPath: "circle(50% at 0% 50%)",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </section>
  );
}

export default EnrollmentSteps;
