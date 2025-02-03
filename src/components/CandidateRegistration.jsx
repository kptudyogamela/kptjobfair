import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CandidateRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    collegeName: "",
    universityBoard: "",
    collegeLocation: "",

    fullName: "",
    gender: "",
    mobileNo: "",
    alternateMobileNo: "",
    state: "",
    district: "",
    email: "",
    hometown: "",
    dateOfBirth: "",
    permanentAddress: "",
    pinCode: "",
    familyIncome: "",

    sslcMode: "Regular",
    sslcYearOfPassing: "",
    sslcMarks: "",

    pucCourse: "",
    pucSpecialization: "",
    pucMode: "Regular",
    pucYearOfPassing: "",
    pucMarks: "",
    itiCourse: "",
    itiSpecialization: "",
    itiMode: "Regular",
    itiYearOfPassing: "",
    itiMarks: "",
    diplomaCourse: "",
    diplomaMode: "Regular",
    diplomaYearOfPassing: "",
    diplomaMarks: "",

    degreeCourse: "",
    degreestream: "",
    degreeSpecialization: "",
    degreeMode: "Regular",
    degreeYearOfPassing: "",
    degreeMarks: "",

    postGradeCourse: "",
    postgradestream: "",
    postGradeSpecialization: "",
    postGradeMode: "Regular",
    postGradeYearOfPassing: "",
    postGradeMarks: "",

    otherTechnicalSkills: [],
    otherLanguages: [],
    otherIndustryAspiration: [],

    relocation: "",
    relocationDetails: "",
    higherStudies: "",
    experience: "",
    experienceyears: "",
    shiftWork: "",
    passport: "",
    drivingLicense: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://kptjobfairbackend.onrender.com/api/candidates", formData)
      .then((response) => {
        console.log("Response from backend:", response.data);
        alert("Candidate details submitted successfully!");
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
        alert("Failed to submit Candidate details.");
      });
  };

  const validateStep = (currentStep) => {
    switch (currentStep) {
      case 1:
        if (
          !formData.collegeName ||
          !formData.universityBoard ||
          !formData.collegeLocation
        ) {
          toast.error("Please fill all required fields.");
          return false;
        }
        break;
      case 2:
        if (
          !formData.fullName ||
          !formData.gender ||
          !formData.mobileNo ||
          !formData.state ||
          !formData.district ||
          !formData.email ||
          !formData.dateOfBirth ||
          !formData.permanentAddress ||
          !formData.pinCode
        ) {
          toast.error("Please fill all required fields in Personal Details.");
          return false;
        }
        break;
      case 3:
        if (
          !formData.sslcYearOfPassing ||
          !formData.sslcMarks ||
          (formData.pucCourse &&
            formData.itiCourse &&
            formData.diplomaCourse) ||
          (formData.pucCourse &&
            (!formData.pucYearOfPassing || !formData.pucMarks)) ||
          (formData.itiCourse &&
            (!formData.itiYearOfPassing || !formData.itiMarks)) ||
          (formData.diplomaCourse &&
            (!formData.diplomaYearOfPassing || !formData.diplomaMarks)) ||
          (formData.degreeCourse &&
            (!formData.degreeYearOfPassing || !formData.degreeMarks)) ||
          (formData.postGradeCourse &&
            (!formData.postGradeYearOfPassing || !formData.postGradeMarks))
        ) {
          toast.error("Please fill all required fields in Academic Details.");
          return false;
        }
        break;
      case 5:
        if (
          !formData.relocation ||
          (formData.relocation === "Yes" && !formData.relocationDetails) ||
          !formData.higherStudies ||
          !formData.experience ||
          (formData.experience === "Yes" && !formData.experienceyears) ||
          !formData.shiftWork ||
          !formData.passport ||
          !formData.drivingLicense
        ) {
          toast.error("Please fill all required fields in Other Details.");
          return false;
        }
        break;
      default:
        break;
    }
    return true;
  };

  const nextStep = () => {
    if (step < 6) {
      if (validateStep(step)) {
        setStep(step + 1);
      }
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg  w-[90vw]">
          <div className="container px-5 py-12 mx-auto flex flex-wrap flex-col">
            <div className="flex mx-auto flex-wrap mb-10">
              <button
                className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider rounded-t ${
                  step === 1
                    ? "border-pink-500 text-pink-500 bg-gray-100"
                    : "border-gray-200 text-gray-600"
                }`}
                onClick={() => setStep(1)}
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                New Registration
              </button>

              <button
                className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider rounded-t ${
                  step === 2
                    ? "border-pink-500 text-pink-500 bg-gray-100"
                    : "border-gray-200 text-gray-600"
                }`}
                onClick={() => setStep(2)}
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                Personal Details
              </button>

              <button
                className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider ${
                  step === 3
                    ? "border-pink-500 text-pink-500 bg-gray-100"
                    : "border-gray-200 text-gray-600"
                }`}
                onClick={() => setStep(3)}
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                Academic Details
              </button>

              <button
                className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider ${
                  step === 4
                    ? "border-pink-500 text-pink-500 bg-gray-100"
                    : "border-gray-200 text-gray-600"
                }`}
                onClick={() => setStep(4)}
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Skills and Experience
              </button>

              <button
                className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider ${
                  step === 5
                    ? "border-pink-500 text-pink-500 bg-gray-100"
                    : "border-gray-200 text-gray-600"
                }`}
                onClick={() => setStep(5)}
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
                Other Details
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div>
                  <h2 className="text-2xl text-center mb-4 mt-0 font-bold text-pink-600">
                    Registration Details
                  </h2>

                  {/* College/Institute Name */}
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      College/Institute Name
                    </label>
                    <input
                      type="text"
                      name="collegeName"
                      value={formData.collegeName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      placeholder="Enter College/Institute Name"
                    />
                  </div>

                  {/* University/Board */}
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      University/Board
                    </label>
                    <input
                      type="text"
                      name="universityBoard"
                      value={formData.universityBoard}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      placeholder="Enter University/Board"
                    />
                  </div>

                  {/* College/Institute Location */}
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      College/Institute Location
                    </label>
                    <input
                      type="text"
                      name="collegeLocation"
                      value={formData.collegeLocation}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      placeholder="Enter College/Institute Location"
                    />
                  </div>
                </div>
              )}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl text-center mb-4 mt-0 font-bold text-pink-600">
                    Personal Details
                  </h2>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      placeholder="Enter full name"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      Gender
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      Mobile No.
                    </label>
                    <input
                      type="tel"
                      name="mobileNo"
                      value={formData.mobileNo}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      placeholder="Enter mobile number"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      Alternate Mobile No.
                    </label>
                    <input
                      type="tel"
                      name="alternateMobileNo"
                      value={formData.alternateMobileNo}
                      onChange={handleChange}
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      placeholder="Enter alternate mobile number"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      placeholder="Enter state"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      Phone No.
                    </label>
                    <input
                      type="tel"
                      name="phoneNo"
                      value={formData.phoneNo}
                      onChange={handleChange}
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      District
                    </label>
                    <input
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      placeholder="Enter district"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      placeholder="Enter email"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      Hometown/City/Village
                    </label>
                    <input
                      type="text"
                      name="hometown"
                      value={formData.hometown}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      placeholder="Enter hometown/city/village"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      Permanent Address
                    </label>
                    <textarea
                      name="permanentAddress"
                      value={formData.permanentAddress}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      placeholder="Enter permanent address"
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      Pin Code
                    </label>
                    <input
                      type="text"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      placeholder="Enter pin code"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      Family Income
                    </label>
                    <input
                      type="number"
                      name="familyIncome"
                      value={formData.familyIncome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      placeholder="Enter family income"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="text-2xl text-center mb-4 mt-0 font-bold text-pink-600">
                    Academic Details
                  </h2>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2">
                            Qualification
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Course
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Stream
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Specialization
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Mode of Education
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Year of Passing
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            % of Marks
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {/* SSLC */}
                        <tr className="border border-gray-300">
                          <td className="border border-gray-300 px-4 py-2 font-semibold text-gray-700">
                            SSLC
                          </td>
                          <td className="border border-gray-300 px-4 py-2"></td>
                          <td className="border border-gray-300 px-4 py-2"></td>
                          <td className="border border-gray-300 px-4 py-2"></td>
                          <td className="border border-gray-300 px-4 py-2">
                            <select
                              name="sslcMode"
                              value={formData.sslcMode}
                              onChange={handleChange}
                              required
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                            >
                              <option value="Regular">Regular</option>
                              <option value="Distance">Distance</option>
                            </select>
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <select
                              name="sslcYearOfPassing"
                              value={formData.sslcYearOfPassing}
                              onChange={handleChange}
                              required
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                            >
                              <option value="">Select Year</option>
                              {Array.from(
                                { length: 30 },
                                (_, i) => new Date().getFullYear() - i
                              ).map((year) => (
                                <option key={year} value={year}>
                                  {year}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <input
                              type="number"
                              step="0.01"
                              name="sslcMarks"
                              value={formData.sslcMarks}
                              onChange={handleChange}
                              required
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                              placeholder="%"
                            />
                          </td>
                        </tr>

                        {/* PUC */}
                        <tr className="border border-gray-300">
                          <td className="border border-gray-300 px-4 py-2 font-semibold text-gray-700">
                            PUC
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <select
                              name="pucCourse"
                              value={formData.pucCourse}
                              onChange={handleChange}
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                            >
                              <option value="">-- Select Course --</option>
                              <option>Arts</option>
                              <option>Commerce</option>
                              <option>Science</option>
                            </select>
                          </td>
                          <td className="border border-gray-300 px-4 py-2"></td>
                          <td className="border border-gray-300 px-4 py-2">
                            <input
                              type="text"
                              name="pucSpecialization"
                              value={formData.pucSpecialization}
                              onChange={handleChange}
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                              placeholder="Enter specialization"
                            />
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <select
                              name="pucMode"
                              value={formData.pucMode}
                              onChange={handleChange}
                              required
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                            >
                              <option value="Regular">Regular</option>
                              <option value="Distance">Distance</option>
                            </select>
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <select
                              name="pucYearOfPassing"
                              value={formData.pucYearOfPassing}
                              onChange={handleChange}
                              required
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                            >
                              <option value="">Select Year</option>
                              {Array.from(
                                { length: 30 },
                                (_, i) => new Date().getFullYear() - i
                              ).map((year) => (
                                <option key={year} value={year}>
                                  {year}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <input
                              type="number"
                              step="0.01"
                              name="pucMarks"
                              value={formData.pucMarks}
                              onChange={handleChange}
                              required
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                              placeholder="%"
                            />
                          </td>
                        </tr>

                        {/* ITI */}
                        <tr className="border border-gray-300">
                          <td className="border border-gray-300 px-4 py-2 font-semibold text-gray-700">
                            ITI
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <input
                              type="text"
                              name="itiCourse"
                              value={formData.itiCourse}
                              onChange={handleChange}
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                              placeholder="Enter Course"
                            />
                          </td>
                          <td className="border border-gray-300 px-4 py-2"></td>
                          <td className="border border-gray-300 px-4 py-2">
                            <input
                              type="text"
                              name="itiSpecialization"
                              value={formData.itiSpecialization}
                              onChange={handleChange}
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                              placeholder="Enter specialization"
                            />
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <select
                              name="itiMode"
                              value={formData.itiMode}
                              onChange={handleChange}
                              required
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                            >
                              <option value="Regular">Regular</option>
                              <option value="Distance">Distance</option>
                            </select>
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <select
                              name="itiYearOfPassing"
                              value={formData.itiYearOfPassing}
                              onChange={handleChange}
                              required
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                            >
                              <option value="">Select Year</option>
                              {Array.from(
                                { length: 30 },
                                (_, i) => new Date().getFullYear() - i
                              ).map((year) => (
                                <option key={year} value={year}>
                                  {year}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <input
                              type="number"
                              step="0.01"
                              name="itiMarks"
                              value={formData.itiMarks}
                              onChange={handleChange}
                              required
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                              placeholder="%"
                            />
                          </td>
                        </tr>

                        {/* Diploma */}
                        <tr className="border border-gray-300">
                          <td className="border border-gray-300 px-4 py-2 font-semibold text-gray-700">
                            Diploma
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <select
                              name="diplomaCourse"
                              value={formData.diplomaCourse}
                              onChange={handleChange}
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                            >
                              <option value="">-- Select Course --</option>

                              <option value="Automobile Engineering">
                                Automobile Engineering
                              </option>
                              <option value="Instrumentation & Mechatronics">
                                Instrumentation & Mechatronics
                              </option>
                              <option value="Chemical Engineering">
                                Chemical Engineering
                              </option>
                              <option value="Mechanical Engineering">
                                Mechanical Engineering
                              </option>
                              <option value="Civil Engineering">
                                Civil Engineering
                              </option>
                              <option value="Electrical Engineering">
                                Electrical Engineering
                              </option>
                              <option value="Computer Science">
                                Computer Science and Engineering
                              </option>
                              <option value="Electronics and Communication">
                                Electronics and Communication
                              </option>
                              <option value="Polymer Technology">
                                Polymer Technology
                              </option>
                              <option value="Others">Others</option>
                            </select>
                          </td>
                          <td className="border border-gray-300 px-4 py-2"></td>
                          <td className="border border-gray-300 px-4 py-2"></td>
                          <td className="border border-gray-300 px-4 py-2">
                            <select
                              name="diplomaMode"
                              value={formData.diplomaMode}
                              onChange={handleChange}
                              required
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                            >
                              <option value="Regular">Regular</option>
                              <option value="Distance">Distance</option>
                            </select>
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <select
                              name="diplomaYearOfPassing"
                              value={formData.diplomaYearOfPassing}
                              onChange={handleChange}
                              required
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                            >
                              <option value="">Select Year</option>
                              {Array.from(
                                { length: 30 },
                                (_, i) => new Date().getFullYear() - i
                              ).map((year) => (
                                <option key={year} value={year}>
                                  {year}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <input
                              type="number"
                              step="0.01"
                              name="diplomaMarks"
                              value={formData.diplomaMarks}
                              onChange={handleChange}
                              required
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                              placeholder="%"
                            />
                          </td>
                        </tr>
                        {/* Degree */}
                        <tr className="border border-gray-300">
                          <td className="border border-gray-300 px-4 py-2 font-semibold text-gray-700">
                            Degree
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <select
                              name="degreeCourse"
                              value={formData.degreeCourse}
                              onChange={handleChange}
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                            >
                              <option value="">-- Select Course --</option>
                              <option value="ANM">ANM</option>
                              <option value="B.A">B.A</option>
                              <option value="B.B.M">B.B.M</option>
                              <option value="B.Com">B.Com</option>
                              <option value="B.Ed">B.Ed</option>
                              <option value="B.E/B.Tech">B.E/B.Tech</option>
                              <option value="B.H.M.S">B.H.M.S</option>
                              <option value="B.H.R.D">B.H.R.D</option>
                              <option value="B.Pharm">B.Pharm</option>
                              <option value="B.Sc">B.Sc</option>
                              <option value="BAMS">BAMS</option>
                              <option value="BBA">BBA</option>
                              <option value="BCA">BCA</option>
                              <option value="BDS">BDS</option>
                              <option value="BHM">BHM</option>
                              <option value="BHS">BHS</option>
                              <option value="BNYS">BNYS</option>
                              <option value="BPT">BPT</option>
                              <option value="BSW">BSW</option>
                              <option value="BVA">BVA</option>
                              <option value="EEG">EEG</option>
                              <option value="GNM">GNM</option>
                              <option value="LLB">LLB</option>
                              <option value="MBBS">MBBS</option>
                              <option value="Microbiology">Microbiology</option>
                            </select>
                          </td>

                          <td className="border border-gray-300 px-4 py-2">
                            <input
                              type="text"
                              name="degreestream"
                              value={formData.degreestream}
                              onChange={handleChange}
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                              placeholder="Enter stream"
                            />
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <input
                              type="text"
                              name="degreeSpecialization"
                              value={formData.degreeSpecialization}
                              onChange={handleChange}
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                              placeholder="Enter specialization"
                            />
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <select
                              name="degreeMode"
                              value={formData.degreeMode}
                              onChange={handleChange}
                              required
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                            >
                              <option value="Regular">Regular</option>
                              <option value="Distance">Distance</option>
                            </select>
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <select
                              name="degreeYearOfPassing"
                              value={formData.degreeYearOfPassing}
                              onChange={handleChange}
                              required
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                            >
                              <option value="">Select Year</option>
                              {Array.from(
                                { length: 30 },
                                (_, i) => new Date().getFullYear() - i
                              ).map((year) => (
                                <option key={year} value={year}>
                                  {year}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <input
                              type="number"
                              step="0.01"
                              name="degreeMarks"
                              value={formData.degreeMarks}
                              onChange={handleChange}
                              required
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                              placeholder="%"
                            />
                          </td>
                        </tr>

                        {/* PstDegree */}
                        <tr className="border border-gray-300">
                          <td className="border border-gray-300 px-4 py-2 font-semibold text-gray-700">
                            Post Graduation
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <select
                              name="postGradeCourse"
                              value={formData.postGradeCourse}
                              onChange={handleChange}
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                            >
                              <option value="">-- Select Course --</option>
                              <option value="M.A">M.A</option>
                              <option value="M.Com">M.Com</option>
                              <option value="M.Sc">M.Sc</option>
                              <option value="MBA">MBA</option>
                              <option value="MCA">MCA</option>
                              <option value="M.Tech">M.Tech</option>
                              <option value="M.Pharm">M.Pharm</option>
                              <option value="M.Ed">M.Ed</option>
                              <option value="M.S">M.S</option>
                              <option value="MD">MD</option>
                              <option value="MDS">MDS</option>
                              <option value="M.Phil">M.Phil</option>
                              <option value="LLM">LLM</option>
                              <option value="Ph.D">Ph.D</option>
                            </select>
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <input
                              type="text"
                              name="postgradestream"
                              value={formData.postgradestream}
                              onChange={handleChange}
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                              placeholder="Enter stream"
                            />
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <input
                              type="text"
                              name="postGradeSpecialization"
                              value={formData.postGradeSpecialization}
                              onChange={handleChange}
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                              placeholder="Enter specialization"
                            />
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <select
                              name="postGradeMode"
                              value={formData.postGradeMode}
                              onChange={handleChange}
                              required
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                            >
                              <option value="Regular">Regular</option>
                              <option value="Distance">Distance</option>
                            </select>
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <select
                              name="postGradeYearOfPassing"
                              value={formData.postGradeYearOfPassing}
                              onChange={handleChange}
                              required
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                            >
                              <option value="">Select Year</option>
                              {Array.from(
                                { length: 30 },
                                (_, i) => new Date().getFullYear() - i
                              ).map((year) => (
                                <option key={year} value={year}>
                                  {year}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <input
                              type="number"
                              step="0.01"
                              name="postGradeMarks"
                              value={formData.postGradeMarks}
                              onChange={handleChange}
                              required
                              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                              placeholder="%"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h2 className="text-2xl text-center mb-4 mt-0 font-bold text-pink-600">
                    Skills & Experience
                  </h2>

                  {/* Technical Skills */}
                  <div className="mb-4">
                    <label className="block text-pink-600 font-semibold mb-2">
                      Technical Skills:
                    </label>
                    <div className="grid grid-cols-4 gap-4">
                      {[
                        "C",
                        "C++",
                        "Java",
                        "PL/SQL",
                        "Microsoft SQL Server",
                        "Oracle",
                        "AutoCAD",
                        "Maya",
                        "Adobe Photoshop",
                        "Android",
                        "iOS",
                        "CorelDRAW",
                        "HTML",
                        "CSS",
                        ".NET Framework",
                        "Microsoft Azure",
                      ].map((skill) => (
                        <label
                          key={skill}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="checkbox"
                            name="technicalSkills"
                            value={skill}
                            onChange={handleChange}
                            className="w-4 h-4"
                          />
                          <span>{skill}</span>
                        </label>
                      ))}
                    </div>
                    <input
                      type="text"
                      name="otherTechnicalSkills"
                      value={formData.otherTechnicalSkills}
                      onChange={handleChange}
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      placeholder="Others (Specify)"
                    />
                  </div>

                  {/* Language Known */}
                  <div className="mb-4">
                    <label className="block text-pink-600 font-semibold mb-2">
                      Languages Known:
                    </label>
                    <div className="grid grid-cols-4 gap-4">
                      {[
                        "English",
                        "Kannada",
                        "Hindi",
                        "Tamil",
                        "Telugu",
                        "Malayalam",
                      ].map((language) => (
                        <label
                          key={language}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="checkbox"
                            name="languagesKnown"
                            value={language}
                            onChange={handleChange}
                            className="w-4 h-4"
                          />
                          <span>{language}</span>
                        </label>
                      ))}
                    </div>
                    <input
                      type="text"
                      name="otherLanguages"
                      value={formData.otherLanguages}
                      onChange={handleChange}
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      placeholder="Others (Specify)"
                    />
                  </div>

                  {/* Industry Aspiration */}
                  <div className="mb-4">
                    <label className="block text-pink-600 font-semibold mb-2">
                      Industry Aspiration:
                    </label>
                    <div className="grid grid-cols-4 gap-4">
                      {[
                        "Automobile",
                        "Banking and Financial Services",
                        "Construction",
                        "Defence",
                        "Education/NGO",
                        "Healthcare",
                        "Hospitality",
                        "HR Consultancy",
                        "Infrastructure",
                        "IT & ITES",
                        "Manufacturing",
                        "Media",
                        "Pharmaceuticals",
                        "Retail and Sales",
                        "Telecom",
                      ].map((industry) => (
                        <label
                          key={industry}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="checkbox"
                            name="industryAspiration"
                            value={industry}
                            onChange={handleChange}
                            className="w-4 h-4"
                          />
                          <span>{industry}</span>
                        </label>
                      ))}
                    </div>
                    <input
                      type="text"
                      name="otherIndustryAspiration"
                      value={formData.otherIndustryAspiration}
                      onChange={handleChange}
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      placeholder="Others (Specify)"
                    />
                  </div>
                </div>
              )}

              {step === 5 && (
                <div>
                  <h2 className="text-2xl text-center mb-4 mt-0 font-bold text-pink-600">
                    Other Details
                  </h2>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      Relocation
                    </label>
                    <select
                      name="relocation"
                      value={formData.relocation}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                    >
                      <option value="">Select Relocation Preference</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  {/* Relocation Details */}
                  {formData.relocation === "Yes" && (
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold">
                        Relocation Details
                      </label>
                      <input
                        type="text"
                        name="relocationDetails"
                        value={formData.relocationDetails}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                        placeholder="Enter relocation details"
                      />
                    </div>
                  )}

                  {/* Higher Studies */}
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      Higher Studies
                    </label>
                    <select
                      name="higherStudies"
                      value={formData.higherStudies}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                    >
                      <option value="">
                        Are you interested in further studies?
                      </option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      Experience
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                    >
                      <option value="">Select Experience</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  {formData.experience === "Yes" && (
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold">
                        Experience years
                      </label>
                      <input
                        type="text"
                        name="experienceyears"
                        value={formData.experienceyears}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                        placeholder="Enter number of years of experience"
                      />
                    </div>
                  )}

                  <div className="mb-4">
                    {/* Shift Work */}
                    <div className="mb-2">
                      <label className="block text-gray-700 font-semibold">
                        Are you ready to work in shift?
                      </label>
                      <select
                        name="shiftWork"
                        value={formData.shiftWork}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      >
                        <option value="">Select Option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>

                    {/* Valid Passport */}
                    <div className="mb-2">
                      <label className="block text-gray-700 font-semibold">
                        Do you have a valid passport?
                      </label>
                      <select
                        name="passport"
                        value={formData.passport}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      >
                        <option value="">Select Option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>

                    {/* Valid Driving License */}
                    <div className="mb-2">
                      <label className="block text-gray-700 font-semibold">
                        Do you have a valid driving license?
                      </label>
                      <select
                        name="drivingLicense"
                        value={formData.drivingLicense}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      >
                        <option value="">Select Option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="py-2 px-4 bg-pink-500 text-white rounded-md"
                  onClick={prevStep}
                  disabled={step === 1}
                >
                  Previous
                </button>
                {step < 5 ? (
                  <button
                    type="button"
                    className="py-2 px-4 bg-pink-500 text-white rounded-md"
                    onClick={nextStep}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="py-2 px-4 bg-green-500 text-white rounded-md"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CandidateRegistration;
