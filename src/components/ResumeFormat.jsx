import { AiOutlineDownload } from "react-icons/ai";
import { FaFileDownload } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";

const ResumeFormat = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mt-10 mb-4">
            Who Can Apply?
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Candidates who have completed SSLC, PUC, ITI, Diploma, Degree,
            Postgraduate studies, or other equivalent qualifications.
          </p>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Choose a format that best suits your career stage and download it
            instantly.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-pink-500 inline-flex"></div>
          </div>
        </div>
        <div className="container px-5 pt-10 mx-auto text-center"></div>
        <div className="container px-5 py-4 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-pink-500 flex-shrink-0">
                  <AiOutlineDownload className="text-4xl" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Fresher's Resume
                  </h2>
                  <p className="leading-relaxed text-base">
                    Download a professionally designed resume format for
                    freshers to showcase your skills and education.
                  </p>
                  <a
                    href="Fresher_CV.docx"
                    download
                    className="mt-3 text-pink-500 inline-flex items-center"
                  >
                    Download Resume
                    <IoMdArrowRoundForward className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-pink-500 flex-shrink-0">
                  <FaFileDownload className="text-3xl" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Experienced Resume
                  </h2>
                  <p className="leading-relaxed text-base">
                    Download a structured resume format for experienced
                    professionals to highlight work history and expertise.
                  </p>
                  <a
                    href="/mnt/data/Experienced_CV.docx"
                    download
                    className="mt-3 text-pink-500 inline-flex items-center"
                  >
                    Download Resume
                    <IoMdArrowRoundForward className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumeFormat;
