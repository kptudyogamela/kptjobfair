import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const fixedEmail = "kptudyogamela@gmail.com"; // Fixed email
  const correctPassword = "kpt103"; // Set your own password here

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if password matches the correct password
    if (password === correctPassword) {
      // Redirect to CandidateList page after successful login
      navigate("/after-signin-home");
    } else {
      // Show error toast if password is incorrect
      toast.error("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Sign In
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Fixed Email Field (disabled) */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={fixedEmail}
              disabled
              className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600  text-lg rounded-md"
          >
            Sign In
          </button>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default SignIn;
