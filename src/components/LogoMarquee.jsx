import React from "react";

const LogoMarquee = () => {
  return (
    <div className="overflow-hidden bg-gray-100 py-2">
      <div className="flex animate-marquee space-x-12">
        <img src="logo1.png" alt="Company 1" className="h-auto w-36" />
        <img src="logo2.png" alt="Company 2" className="h-auto w-36" />
        <img src="logo3.png" alt="Company 3" className="h-auto w-36" />
        <img src="logo4.png" alt="Company 4" className="h-auto w-36" />
        {/* Add more logos here */}
      </div>
    </div>
  );
};

export default LogoMarquee;
