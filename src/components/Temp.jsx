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
    <div>
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
                  <path d="M13 3L4 14h7l-2 7 10-12h-7z"></path>
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
                <div>
                  <h2 className="text-2xl text-center mb-4 mt-0 font-bold text-pink-600">
                    Academic Details
                  </h2>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h2 className="text-2xl text-center mb-4 mt-0 font-bold text-pink-600">
                    Skills & Experience
                  </h2>
                </div>
              )}

              {step === 5 && (
                <div>
                  <h2 className="text-2xl text-center mb-4 mt-0 font-bold text-pink-600">
                    Other Details
                  </h2>
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
