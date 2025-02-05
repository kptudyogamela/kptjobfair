import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Temp = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
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
    relocation: "No",
    relocationDetails: "",
    higherStudies: "No",
    experience: "No",
    experienceyears: "",
    shiftWork: "No",
    passport: "No",
    drivingLicense: "No",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    alert(step);
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);
    axios
      .post("https://kptjobfairbackend.onrender.com/api/candidates", formData)
      .then((response) => {
        console.log("Response from backend:", response.data);
        alert("Candidate details submitted successfully!");
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
        alert("Failed to submit Candidate details.");
        setLoading(false);
      });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="overflow-x-hidden">
      {loading && (
        <div className="absolute inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-center z-10">
          {/* Spinner Animation */}
          <div className="flex flex-col justify-center items-center">
            <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-pink-500 border-solid mb-4"></div>
            <div className="text-black text-2xl font-semibold">
              Please wait, submitting your data...
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-7xl">
          <div className="container px-5 py-12 mx-auto flex flex-wrap flex-col">
            <div className="flex mx-auto flex-wrap mb-10">
              {/* Navigation Buttons */}
              <button
                className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider rounded-t ${
                  step === 1
                    ? "border-pink-500 text-pink-500 bg-gray-100"
                    : "border-gray-200 text-gray-600"
                }`}
                onClick={() => setStep(1)}
              >
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
                Personal Details
              </button>
              <button
                className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider rounded-t ${
                  step === 3
                    ? "border-pink-500 text-pink-500 bg-gray-100"
                    : "border-gray-200 text-gray-600"
                }`}
                onClick={() => setStep(3)}
              >
                Academic Details
              </button>
              <button
                className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider rounded-t ${
                  step === 4
                    ? "border-pink-500 text-pink-500 bg-gray-100"
                    : "border-gray-200 text-gray-600"
                }`}
                onClick={() => setStep(4)}
              >
                Skills and Experience
              </button>
              <button
                className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider rounded-t ${
                  step === 5
                    ? "border-pink-500 text-pink-500 bg-gray-100"
                    : "border-gray-200 text-gray-600"
                }`}
                onClick={() => setStep(5)}
              >
                Other Details
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div>
                  <h2 className="text-2xl text-center mb-4 mt-0 font-bold text-pink-600">
                    New Registration
                  </h2>
                </div>
              )}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl text-center mb-4 mt-0 font-bold text-pink-600">
                    Personal Details
                  </h2>
                </div>
              )}
              {step === 3 && (
                <div className="relative max-w-7xl mx-auto p-6">
                  <h2 className="text-2xl text-center mb-4 mt-0 font-bold text-pink-600">
                    Academic Details
                  </h2>

                  <div className="overflow-x-auto w-full">
                    <table className="min-w-max w-full border-collapse border border-gray-300 text-sm sm:text-base">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="border border-gray-300 px-2 py-1 text-sm sm:px-4 sm:py-2">
                            Qualification
                          </th>
                          <th className="border border-gray-300 px-2 py-1 text-sm sm:px-4 sm:py-2">
                            Course
                          </th>
                          <th className="border border-gray-300 px-2 py-1 text-sm sm:px-4 sm:py-2">
                            Stream
                          </th>
                          <th className="border border-gray-300 px-2 py-1 text-sm sm:px-4 sm:py-2">
                            Specialization
                          </th>
                          <th className="border border-gray-300 px-2 py-1 text-sm sm:px-4 sm:py-2">
                            Mode of Education
                          </th>
                          <th className="border border-gray-300 px-2 py-1 text-sm sm:px-4 sm:py-2">
                            Year of Passing
                          </th>
                          <th className="border border-gray-300 px-2 py-1 text-sm sm:px-4 sm:py-2">
                            % of Marks
                          </th>
                        </tr>
                      </thead>
                      <tbody>
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
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Add other steps here */}

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
                    {loading ? "Submitting..." : "Submit"}
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

export default Temp;
