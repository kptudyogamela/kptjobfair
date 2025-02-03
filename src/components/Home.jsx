import { Link } from "react-router-dom";
import img1 from "./../assets/herosection1.jpg";
import { Typewriter } from "react-simple-typewriter";
import LogoMarquee from "./LogoMarquee";

const Home = () => {
  return (
    <div>
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
              <Link to="/registration">
                <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                  Companies Registration
                </button>
              </Link>
              <Link to="/registration">
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Candidates Registration
                </button>
              </Link>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-pink-500 text-2xl font-bold">50+</h3>
                <p className="text-gray-600 text-lg">Companies Participating</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-pink-500 text-2xl font-bold">5,000+</h3>
                <p className="text-gray-600 text-lg">Expected Job Seekers</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-pink-500 text-2xl font-bold">3000+</h3>
                <p className="text-gray-600 text-lg">Job Openings</p>
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
        {/* <LogoMarquee /> */}
      </section>
    </div>
  );
};

export default Home;
