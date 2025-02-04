import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "./../assets/herosection1.jpg";

import { FaFileDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="relative">
      {/* Animated Download Brochure Button */}
      <motion.div
        initial={{ x: 100, opacity: 0 }} // Start off-screen to the right
        animate={{ x: 0, opacity: 1 }} // Move into position
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 15,
          duration: 1.2,
        }} // Smoother & slower
        className="absolute top-7 right-5"
      >
        <a
          href="/JobFairBrochure.pdf"
          download="JobFairBrochure.pdf"
          className="bg-pink-500 text-white py-4 px-6 rounded-lg shadow-lg hover:bg-pink-600 transition duration-300 flex items-center gap-2"
        >
          Download Brochure
          <FaFileDownload className="text-white text-2xl" />
        </a>
      </motion.div>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
              Welcome to the Karnataka District Level Job Fair –{" "}
              <br className="hidden lg:inline-block" />
              <span className="text-pink-500">
                <Typewriter
                  words={["Dakshina Kannada, Mangaluru."]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                />
              </span>
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              The Karnataka District Level Job Fair, initiated by the Government
              of Karnataka, organized under the guidance of the Skill
              Development Department and funded by the Karnataka Skill
              Development Corporation. Hosted at Karnataka (Govt.) Polytechnic,
              Mangalore, the fair provides a platform for career growth, skill
              enhancement, and direct recruitment.
            </p>
            <div className="flex justify-center">
              <Link to="/company-registration">
                <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                  Companies Registration
                </button>
              </Link>
              <Link to="/candidate-registration">
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Candidates Registration
                </button>
              </Link>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white shadow-md rounded-lg p-4 sm:p-5 md:p-6 text-center">
                <h3 className="text-pink-500 text-xl sm:text-2xl font-bold">
                  50+
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                  Companies Participating
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 sm:p-5 md:p-6 text-center">
                <h3 className="text-pink-500 text-xl sm:text-2xl font-bold">
                  5,000+
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                  Expected Job Seekers
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 sm:p-5 md:p-6 text-center">
                <h3 className="text-pink-500 text-xl sm:text-2xl font-bold">
                  3000+
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                  Job Openings
                </p>
              </div>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={img1}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
