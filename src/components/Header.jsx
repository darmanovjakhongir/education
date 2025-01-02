import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Header() {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#programs", label: "Teachers" },
    { href: "#courses", label: "Courses" },
    { href: "#enrollmentsteps", label: "Pricing" },
    { href: "#about", label: "About Us" },
  ];

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          <span className="text-blue-600">Edu</span>cation
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-gray-600">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={`hover:text-blue-600 ${
                    pathname === link.href ? "text-blue-600 font-bold" : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/signin"
            className="font-bold text-gray-600 hover:text-blue-600"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
          >
            Sign Up
          </Link>
        </div>
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          ☰
        </button>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 p-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={`hover:text-blue-600 ${
                    pathname === link.href ? "text-blue-600 font-bold" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/signin"
                className="block font-bold text-gray-600 hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="block bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
