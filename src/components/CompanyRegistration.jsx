import { useState } from "react";

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Company Registration Data:", formData);
    alert("Company Registered Successfully!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
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
                To CTC
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
                From Experience<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="fromExperience"
                value={formData.fromExperience}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="From Experience"
              />
            </div>
            <div className="w-full">
              <label className="block text-gray-700 font-semibold">
                To Experience
              </label>
              <input
                type="number"
                name="toExperience"
                value={formData.toExperience}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="To Experience"
              />
            </div>
          </div>

          {/* Designation */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Designationation Offered<span className="text-red-500">*</span>
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
              Qualification of a Candidate
            </label>
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter required qualification"
            />
          </div>

          {/* Course */}
          <div>
            <label className="block text-gray-700 font-semibold">Course</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter relevant course"
            />
          </div>

          {/* Stream */}
          <div>
            <label className="block text-gray-700 font-semibold">Stream</label>
            <input
              type="text"
              name="stream"
              value={formData.stream}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter relevant stream"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              Register Company
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyRegistration;
