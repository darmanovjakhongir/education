import quotation from "../assets/icons/quotation.svg";
import background from "../assets/images/background.png";
import jamesthomas from "../assets/images/james-thomas.png";

function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl text-gray-800">
          <span className="font-bold text-blue-600">What</span> our students say
        </h2>
        <p className="mt-4 text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </p>
        <div
          className="relative mt-8 bg-blue-600 text-white p-6 rounded-lg shadow-lg"
          style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute top-[-10px] right-[-10px] w-16 h-16 rounded-full bg-yellow-400"></div>
          <div className="flex justify-start items-start mb-4">
            <img src={quotation} alt="Quotation" className="w-12 h-12" />
          </div>
          <p className="italic">
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          </p>
          <div className="absolute bottom-[-20px] left-[-20px] w-16 h-16 rounded-full bg-yellow-400"></div>
        </div>
        <div className="mt-4">
          <img
            src={jamesthomas}
            alt="James Thomas"
            className="h-24 w-24 mx-auto rounded-lg border-2 border-gray-600"
          />
          <div className="mt-4 text-sm font-bold text-gray-800">
            <h2 className="text-lg font-semibold">James Thomas</h2>
            <p className="text-gray-600">Germany</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
