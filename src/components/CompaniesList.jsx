import axios from "axios";
import { useState, useEffect } from "react";

const CompaniesList = () => {
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    axios
      .get("https://kptjobfairbackend.onrender.com/api/companies")
      .then((response) => {
        console.log("Fetched Data:", response.data); // Print data in console
        setJobData(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto p-6">
      {/* Overlay - shown when loading */}
      {loading && (
        <div className="absolute inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-center z-10">
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
        List of Companies Registered
      </h2>

      {/* Companies List Table */}
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
                <th className="border p-2">Company Name</th>
                <th className="border p-2">Contact Person</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Phone</th>
                <th className="border p-2">Job Location</th>
                <th className="border p-2">Industry Type</th>
                <th className="border p-2">Experience</th>
                <th className="border p-2">CTC</th>
                <th className="border p-2">Website</th>
              </tr>
            </thead>
            <tbody>
              {jobData.length === 0 ? (
                <tr>
                  <td colSpan="9" className="text-center p-4 text-gray-500">
                    No job data available.
                  </td>
                </tr>
              ) : (
                jobData.map((job, index) => (
                  <tr key={index} className="border hover:bg-gray-50">
                    <td className="border p-2">{job.companyName}</td>
                    <td className="border p-2">{job.contactPerson}</td>
                    <td className="border p-2">{job.email}</td>
                    <td className="border p-2">{job.phone}</td>
                    <td className="border p-2">{job.jobLocation}</td>
                    <td className="border p-2">{job.industryType}</td>
                    <td className="border p-2">
                      {job.fromExperience} - {job.toExperience} yrs
                    </td>
                    <td className="border p-2">
                      {job.fromCTC} - {job.toCTC} LPA
                    </td>
                    <td className="border p-2">
                      <a
                        href={job.companyWebsite}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit
                      </a>
                    </td>
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

export default CompaniesList;
