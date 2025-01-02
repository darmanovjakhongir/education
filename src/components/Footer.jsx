import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import youtube from "../assets/icons/youtube.svg";
import twitter from "../assets/icons/twitter.svg";

function Footer() {
  const socialLinks = [
    { href: "#", src: facebook, alt: "Facebook Icon" },
    { href: "#", src: instagram, alt: "Instagram Icon" },
    { href: "#", src: youtube, alt: "YouTube Icon" },
    { href: "#", src: twitter, alt: "Twitter Icon" },
  ];

  const aboutLinks = [
    { href: "#", label: "Menu" },
    { href: "#", label: "Features" },
    { href: "#", label: "News & Blogs" },
    { href: "#", label: "Help & Support" },
  ];

  const companyLinks = [
    { href: "#", label: "How we work" },
    { href: "#", label: "Terms of service" },
    { href: "#", label: "Pricing" },
    { href: "#", label: "FAQ" },
  ];

  const contactInfo = [
    "Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar, Bangalore-560016",
    { href: "#", label: "+1 202-918-2132" },
    { href: "#", label: "education@mail.com" },
    { href: "#", label: "www.education.com" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="text-2xl font-bold">Education</h3>
          <p className="mt-2 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="mt-4 flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:opacity-80"
                title={link.alt}
              >
                <img src={link.src} alt={link.alt} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold">About</h3>
          <ul className="mt-2 text-sm space-y-2">
            {aboutLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Company</h3>
          <ul className="mt-2 text-sm space-y-2">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Contact Us</h3>
          <ul className="mt-2 text-sm space-y-2">
            {contactInfo.map((info, index) =>
              typeof info === "string" ? (
                <li key={index}>{info}</li>
              ) : (
                <li key={index}>
                  <a href={info.href} className="hover:underline">
                    {info.label}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Education. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
