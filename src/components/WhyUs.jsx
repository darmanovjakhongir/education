import digitalplatform from "../assets/icons/digital-platform.svg";
import optimalideation from "../assets/icons/optimal-ideation.svg";
import favorablesetting from "../assets/icons/favorable-setting.svg";
import effectiveinteraction from "../assets/icons/effective-interaction.svg";
import flexibletime from "../assets/icons/flexible-time.svg";
import reliable from "../assets/icons/reliable.svg";

const features = [
  { img: digitalplatform, title: "Digital Platform" },
  { img: optimalideation, title: "Optimal Ideation" },
  { img: favorablesetting, title: "Favorable Setting" },
  { img: effectiveinteraction, title: "Effective Interaction" },
  { img: flexibletime, title: "Flexible Time" },
  { img: reliable, title: "Reliable" },
];

function WhyUs() {
  return (
    <section id="whyus" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl text-gray-800">
          <span className="font-bold text-blue-600">Why we are</span> best from others?
        </h2>
        <p className="mt-4 text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ img, title }, index) => (
            <div key={index} className="p-6 bg-white shadow rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <img src={img} alt={title} className="h-24 w-24 mx-auto" />
              <h3 className="font-bold text-gray-800 mt-4">{title}</h3>
              <p className="mt-2 text-gray-600">Lorem Ipsum is simply dummy text...</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
