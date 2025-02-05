import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import HowToReach from "./components/HowToReach";
import Navbar from "./components/Navbar";
import WhyJobFair from "./components/WhyJobFair";
import SignIn from "./components/Signin";
import CandidateList from "./components/CandidateList";
import ResumeFormat from "./components/ResumeFormat";
import CompanyRegistration from "./components/CompanyRegistration";
import CandidateRegistration from "./components/CandidateRegistration";
import "./index.css";
import Temp from "./components/Temp";
import CompaniesList from "./components/CompaniesList";
import AfterSignInHome from "./components/AfterSignInHome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/temp" element={<Temp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-job-fair" element={<WhyJobFair />} />
          <Route
            path="/candidate-registration"
            element={<CandidateRegistration />}
          />{" "}
          <Route
            path="/company-registration"
            element={<CompanyRegistration />}
          />
          <Route path="/how-to-reach" element={<HowToReach />} />
          <Route path="/resumeformat" element={<ResumeFormat />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/after-signin-home" element={<AfterSignInHome />} />
          <Route path="/company-list" element={<CompaniesList />} />
          <Route path="/candidate-list" element={<CandidateList />} />
          <Route path="/temp" element={<Temp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
