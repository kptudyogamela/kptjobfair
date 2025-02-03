import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AfterSignInHome() {
  const navigate = useNavigate();

  return (
    <div className="m-5 ">
      <div className="flex items-center gap-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => navigate("/company-list")}
        >
          Candidates Details
        </button>
        <button
          className="px-4 py-2 bg-pink-500 text-white rounded"
          onClick={() => navigate("/candidate-list")}
        >
          Candidates Details
        </button>
      </div>
    </div>
  );
}

export default AfterSignInHome;
