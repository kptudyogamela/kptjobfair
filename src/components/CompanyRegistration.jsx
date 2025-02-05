import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CompanyRegistration = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    industryType: "",
    companyWebsite: "",
    jobRoles: "",
    companyAddress: "",
    jobLocation: "",
    fromCTC: "",
    toCTC: "",
    fromExperience: "",
    toExperience: "",
    designation: "",
    qualification: "",
    course: "",
    stream: "",
  });

  const [loading, setLoading] = useState(false); // Track submission loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    window.scrollTo({ top: 4, behavior: "smooth" });
    setLoading(true); // Show loading animation when submitting

    axios
      .post("https://kptjobfairbackend.onrender.com/api/companies", formData)
      .then((response) => {
        console.log("Response from backend:", response.data);
        toast.success("Company details submitted successfully!");
        setLoading(false); // Stop loading animation
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
        toast.error("Failed to submit Company details.");
        setLoading(false); // Stop loading animation on error
      });
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      {loading && (
        <div className="absolute inset-0 h-50 bg-gray-100 bg-opacity-50 flex justify-center items-center z-10">
          {/* Spinner Animation */}
          <div className="flex flex-col justify-center items-center">
            <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-pink-500 border-solid mb-4"></div>
            <div className="text-black text-2xl font-semibold">
              Please wait, submitting your data...
            </div>
          </div>
        </div>
      )}

      <div className="bg-white shadow-lg rounded-lg p-8 w-[90vw]">
        <h2 className="text-2xl font-bold text-pink-600 text-center mb-6">
          Company Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Company Name */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Company Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter company name"
            />
          </div>

          {/* Contact Person */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Contact Person<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter contact person's name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter company email"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter contact number"
            />
          </div>

          {/* Industry Type */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Industry Type<span className="text-red-500">*</span>
            </label>
            <select
              name="industryType"
              value={formData.industryType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="">Select Industry</option>
              <option value="IT">IT</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Finance">Finance</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Company Website */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Company Website
            </label>
            <input
              type="url"
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter website URL (if any)"
            />
          </div>

          {/* Job Roles */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Job Roles Offered
            </label>
            <textarea
              name="jobRoles"
              value={formData.jobRoles}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter job roles offered"
              rows="3"
            ></textarea>
          </div>

          {/* Company Address */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Company Address<span className="text-red-500">*</span>
            </label>
            <textarea
              name="companyAddress"
              value={formData.companyAddress}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter full address"
              rows="3"
            ></textarea>
          </div>

          {/* Job Location */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Job Location<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="jobLocation"
              value={formData.jobLocation}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter job location"
            />
          </div>

          {/* CTC Range */}
          <div className="flex space-x-4">
            <div className="w-full">
              <label className="block text-gray-700 font-semibold">
                From CTC<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="fromCTC"
                value={formData.fromCTC}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="From CTC"
              />
            </div>
            <div className="w-full">
              <label className="block text-gray-700 font-semibold">
                To CTC<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="toCTC"
                value={formData.toCTC}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="To CTC"
              />
            </div>
          </div>

          {/* Experience Range */}
          <div className="flex space-x-4">
            <div className="w-full">
              <label className="block text-gray-700 font-semibold">
                From Experience (in years)
              </label>
              <input
                type="number"
                name="fromExperience"
                value={formData.fromExperience}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="From Experience"
                min="0"
              />
            </div>
            <div className="w-full">
              <label className="block text-gray-700 font-semibold">
                To Experience (in years)
              </label>
              <input
                type="number"
                name="toExperience"
                value={formData.toExperience}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="To Experience"
              />
            </div>
          </div>

          {/* Designation */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Designation Offered<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter job designation"
            />
          </div>

          {/* Qualification */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Qualification Required<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter qualification"
            />
          </div>

          {/* Course */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Courses Eligible<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter eligible courses"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded-full w-full mt-4"
            >
              {loading ? "Submitting..." : "Register Company"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default CompanyRegistration;
