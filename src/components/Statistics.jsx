import background from "../assets/images/background.png";

const stats = [
  { value: "150+", label: "Total Courses" },
  { value: "250", label: "Total Instructors" },
  { value: "35k+", label: "Total Students" },
];

function Statistics() {
  return (
    <section
      id="statistics"
      className="relative bg-blue-600 text-white py-12"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute bottom-[-24px] left-[-24px] w-32 h-32 rounded-full bg-yellow-400"></div>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 text-center">
        {stats.map(({ value, label }, index) => (
          <div key={index}>
            <h3 className="text-6xl font-bold">{value}</h3>
            <p className="text-xl mt-2">{label}</p>
          </div>
        ))}
      </div>
      <div className="absolute top-[-24px] right-[-24px] w-32 h-32 rounded-full bg-yellow-400"></div>
    </section>
  );
}

export default Statistics;
