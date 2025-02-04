import axios from "axios";
import { useState, useEffect } from "react";

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    axios
      .get("https://kptjobfairbackend.onrender.com/api/candidates")
      .then((response) => {
        console.log("Fetched Data:", response.data); // Print data in console
        setCandidates(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  return (
    <div className="relative max-w-full mx-auto p-6">
      {/* Overlay - shown when loading */}
      {loading && (
        <div className="absolute inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-center z-10 p-5">
          {/* Spinner Animation */}
          <div className="flex flex-col justify-center items-center">
            <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-pink-500 border-solid mb-4"></div>
            <div className="text-black text-2xl font-semibold">
              Please wait, data is being fetched from the server...
            </div>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-bold text-center text-pink-600 mb-4">
        List of Candidates Registered
      </h2>

      {/* Candidate List Table */}
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-pink-500"></div>{" "}
          {/* Loading Spinner */}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 shadow-md">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-left">
                <th className="border p-2">College Name</th>
                <th className="border p-2">University/Board</th>
                <th className="border p-2">Location</th>
                <th className="border p-2">Full Name</th>
                <th className="border p-2">Gender</th>
                <th className="border p-2">Mobile No</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">State</th>
                <th className="border p-2">District</th>
                <th className="border p-2">Hometown</th>
                <th className="border p-2">Date of Birth</th>
                <th className="border p-2">Permanent Address</th>
                <th className="border p-2">Pin Code</th>
                <th className="border p-2">Family Income</th>
                <th className="border p-2">SSLC Marks</th>
                <th className="border p-2">PUC Marks</th>
                <th className="border p-2">Diploma Marks</th>
                <th className="border p-2">Degree Marks</th>
                <th className="border p-2">Post Grade Marks</th>
                <th className="border p-2">Technical Skills</th>
                <th className="border p-2">Languages</th>
                <th className="border p-2">Industry Aspiration</th>
                <th className="border p-2">Relocation</th>
                <th className="border p-2">Higher Studies</th>
                <th className="border p-2">Experience</th>
                <th className="border p-2">Passport</th>
                <th className="border p-2">Driving License</th>
              </tr>
            </thead>
            <tbody>
              {candidates.length === 0 ? (
                <tr>
                  <td colSpan="27" className="text-center p-4 text-gray-500">
                    No candidate data available.
                  </td>
                </tr>
              ) : (
                candidates.map((candidate, index) => (
                  <tr key={index} className="border hover:bg-gray-50">
                    <td className="border p-2">{candidate.collegeName}</td>
                    <td className="border p-2">{candidate.universityBoard}</td>
                    <td className="border p-2">{candidate.collegeLocation}</td>
                    <td className="border p-2">{candidate.fullName}</td>
                    <td className="border p-2">{candidate.gender}</td>
                    <td className="border p-2">{candidate.mobileNo}</td>
                    <td className="border p-2">{candidate.email}</td>
                    <td className="border p-2">{candidate.state}</td>
                    <td className="border p-2">{candidate.district}</td>
                    <td className="border p-2">{candidate.hometown}</td>
                    <td className="border p-2">{candidate.dateOfBirth}</td>
                    <td className="border p-2">{candidate.permanentAddress}</td>
                    <td className="border p-2">{candidate.pinCode}</td>
                    <td className="border p-2">{candidate.familyIncome}</td>
                    <td className="border p-2">{candidate.sslcMarks}</td>
                    <td className="border p-2">{candidate.pucMarks}</td>
                    <td className="border p-2">{candidate.diplomaMarks}</td>
                    <td className="border p-2">{candidate.degreeMarks}</td>
                    <td className="border p-2">{candidate.postGradeMarks}</td>
                    <td className="border p-2">
                      {candidate.otherTechnicalSkills.join(", ")}
                    </td>
                    <td className="border p-2">
                      {candidate.otherLanguages.join(", ")}
                    </td>
                    <td className="border p-2">
                      {candidate.otherIndustryAspiration.join(", ")}
                    </td>
                    <td className="border p-2">{candidate.relocation}</td>
                    <td className="border p-2">{candidate.higherStudies}</td>
                    <td className="border p-2">
                      {candidate.experienceyears} years
                    </td>
                    <td className="border p-2">{candidate.passport}</td>
                    <td className="border p-2">{candidate.drivingLicense}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CandidateList;
