import { Link } from "react-router-dom";
import img1 from "./../assets/herosection1.jpg";
import Ourteam from "./Ourteam";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="text-gray-900">
      <div className="container mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Image */}
          <div className="hidden md:block">
            <img
              src={img1}
              alt="about us page image"
              className="rounded-2xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              What is the Job Fair?
            </h2>
            <p className="mt-3 text-gray-700 text-justify leading-relaxed">
              The <strong>Karnataka District Level Job Fair</strong> is a
              government-backed initiative to connect job seekers with top
              employers. Organized by the{" "}
              <strong>Skill Development Department</strong> and funded by{" "}
              <strong>Karnataka Skill Development Corporation</strong>, this
              event is a gateway to countless career opportunities.
            </p>
            <p className="mt-3 text-gray-700 text-justify leading-relaxed">
              The fair is being organized at{" "}
              <strong>Karnataka (Govt.) Polytechnic, Mangaluru</strong>.
              Karnataka (Govt.) Polytechnic is situated in Mangalore, a vibrant
              coastal city known for its educational institutions and serene
              surroundings. Conveniently located near key transport hubs such as
              Mangalore Airport and various railway stations, the college is
              easily accessible for students and visitors.
            </p>
            <div className="mt-5">
              <Link
                to="/candidate-registration"
                className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-pink-600 transition duration-300"
              >
                Register Now 🚀
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Event Highlights */}
      <div className="py-10 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Why Attend?
          </h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {/* Highlight Cards */}
            {[
              {
                title: "💼 50+ Companies",
                desc: "Meet recruiters from leading industries.",
              },
              {
                title: "🎯 On-the-Spot Hiring",
                desc: "Get interviewed and land a job instantly.",
              },
              {
                title: "📑 Resume Assistance",
                desc: "Expert guidance on crafting your resume.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300"
              >
                <h3 className="text-xl font-semibold text-pink-600">
                  {item.title}
                </h3>
                <p className="text-gray-700 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Ourteam />
    </div>
  );
};

export default About;
