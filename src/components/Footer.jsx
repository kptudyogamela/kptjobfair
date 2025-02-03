import logo2 from "./../assets/twologos.png";
import img1 from "./../assets/KPT LOgo.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-gradient-to-b from-pink-5 to-white">
        <div className="relative w-full my-4"></div>
        <div className="container px-5 pt-4 pb-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex flex-col title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="ml-3 text-center text-xl">
                Karnataka District Level Job Fair{" "}
              </span>
            </a>
            <p className="mt-2 mb-2 text-sm text-gray-500 text-justify">
              Organized by the{" "}
              <span className="font-bold">Skill Development Department</span>{" "}
              and funded by the{" "}
              <span className="font-bold">
                Karnataka Skill Development Corporation
              </span>
              , the fair is set to take place at{" "}
              <span className="font-bold">
                Karnataka (Govt.) Polytechnic, Mangalore{" "}
              </span>
              .
            </p>
            <div className="bg-pink-100 h-1 w-full rounded-full mb-4"></div>{" "}
            <a
              href="https://kaushalkar.karnataka.gov.in/english"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo2} alt="Logo" className="h-15" />
            </a>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                QUICK LINKS
              </h2>
              <div className="bg-pink-100 h-1 w-full rounded-full mb-4"></div>{" "}
              <nav className="list-none mb-10">
                <li>
                  <Link to="/" className="text-gray-600 hover:text-pink-500">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-600 hover:text-pink-500"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/why-job-fair"
                    className="text-gray-600 hover:text-pink-500"
                  >
                    Why Job Fair
                  </Link>
                </li>
                <li>
                  <Link
                    to="/company-registration"
                    className="text-gray-600 hover:text-pink-500"
                  >
                    Company Registration
                  </Link>
                </li>
                <li>
                  <Link
                    to="/candidate-registration"
                    className="text-gray-600 hover:text-pink-500"
                  >
                    Candidate Registration
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resumeformat"
                    className="text-gray-600 hover:text-pink-500"
                  >
                    Resume Format
                  </Link>
                </li>
                <li>
                  <Link
                    to="/how-to-reach"
                    className="text-gray-600 hover:text-pink-500"
                  >
                    How To Reach
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                GENERAL LINKS
              </h2>
              <div className="bg-pink-100 h-1 w-full rounded-full mb-4"></div>{" "}
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="/Terms and Conditions.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-pink-500"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/PrivacyPolicy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-pink-500"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/Disclaimer.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-pink-500"
                  >
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a
                    href="/SITEMAP.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-pink-500"
                  >
                    Site Map
                  </a>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                JOBFAIR VENUE
              </h2>
              <div className="bg-pink-100 h-1 w-full rounded-full mb-4"></div>{" "}
              <p className="mt-2 text-gray-700">
                <strong>Address:</strong> Karnataka (Govt.) Polytechnic -
                Mangaluru, <br />
                Near KPT Junction, Kadri Hills, Mangaluru, Karnatka -575004,
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Tel:</strong> 0824 - 351 6910
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Email:</strong>{" "}
                <a href="mailto:ceo@jobfairindia.in" className="text-pink-600">
                  kptudyogamela@gmail.com
                </a>{" "}
                <br />
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.jobfairindia.com"
                  target="_blank"
                  className="text-pink-600"
                >
                  www.kptjobfair.com
                </a>
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Working Hours:</strong> 9am - 5pm
              </p>
            </div>
            <div className="w-35 h-50 text-white p-2 rounded-full">
              <a
                href="https://gpt.karnataka.gov.in/kptmangalore/public/en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={img1} />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © Copyright All Rights Reserved 2025 —
              <a
                className="ml-3 text-gray-500 hover:text-pink-500 transition-colors duration-300 cursor-pointer
                href="
                https:rel="noopener noreferrer"
                target="_blank"
              >
                @KPT Incubation Center
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="ml-3 text-gray-500 hover:text-pink-500 transition-colors duration-300 cursor-pointer">
                {" "}
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>

              <a className="ml-3 text-gray-500 hover:text-pink-500 transition-colors duration-300 cursor-pointer">
                {" "}
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500 hover:text-pink-500 transition-colors duration-300 cursor-pointer">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500 hover:text-pink-500 transition-colors duration-300 cursor-pointer">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
