import { Link } from "react-router-dom";
import { useState } from "react";
import logo2 from "./../assets/twologos.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto flex justify-between items-center px-5">
          <div className="hidden sm:block">
            <span className="text-xl justify-center text-pink-600 font-bold">
              Karnataka Government District Level Job Fair
            </span>
          </div>
          <marquee
            behavior="scroll"
            direction="left"
            className="text-xl font-bold text-red-600"
          >
            📅 Karnataka District Level Job Fair | February 15, 2025 - Saturday
            |📍 Karnataka (Govt.) Polytechnic, Mangaluru 🎯
          </marquee>
          <div className="text-gray-600 text-sm">
            📞 0824 - 351 6910 | ✉️ kptudyogamela@gmail.com
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="text-gray-600 body-font bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <a
            href="https://kaushalkar.karnataka.gov.in/english"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo2} alt="Logo" className="h-20" />
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link
              to="/home"
              className="mr-5 hover:text-pink-600 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="mr-5 hover:text-pink-600 cursor-pointer"
            >
              About
            </Link>
            <Link
              to="/why-job-fair"
              className="mr-5 hover:text-pink-600 cursor-pointer"
            >
              Why Job Fair
            </Link>

            {/* Dropdown for Registration */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="mr-5 hover:text-pink-600 cursor-pointer focus:outline-none"
              >
                Registration ▼
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden">
                  <Link
                    to="/candidate-registration"
                    className="block px-4 py-2 text-gray-800 hover:bg-pink-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Candidate Registration
                  </Link>
                  <Link
                    to="/company-registration"
                    className="block px-4 py-2 text-gray-800 hover:bg-pink-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Company Registration
                  </Link>
                  <Link
                    to="/resumeformat"
                    className="block px-4 py-2 text-gray-800 hover:bg-pink-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Resume Format
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/how-to-reach"
              className="mr-5 hover:text-pink-600 cursor-pointer"
            >
              How to Reach
            </Link>
            <Link
              to="/contact"
              className="mr-5 hover:text-pink-600 cursor-pointer"
            >
              Contact
            </Link>
          </nav>

          {/* Sign In Button */}
          <Link to="/signin">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-pink-200 rounded text-base mt-4 md:mt-0">
              Sign In
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
