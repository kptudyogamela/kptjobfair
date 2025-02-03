import React from "react";

const HowtoReach = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {/* First Section - Location */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                Location
              </span>
              <span className="mt-1 text-gray-500 text-sm">
                Karnataka (Govt.) Polytechnic
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                How to Reach Us
              </h2>
              <p className="leading-relaxed text-justify">
                Karnataka (Govt.) Polytechnic is situated in Mangalore, a
                vibrant coastal city known for its educational institutions and
                serene surroundings. Conveniently located near key transport
                hubs such as Mangalore Airport and various railway stations, the
                college is easily accessible for students and visitors.
                Surrounded by lush greenery and close to the Arabian Sea, the
                campus provides an ideal environment for academic excellence and
                personal growth. With a focus on empowering students from rural
                backgrounds, the institution offers a nurturing and inclusive
                learning experience.
              </p>
              <div className="mt-4">
                <iframe
                  src="https://maps.google.com/maps?q=Karnataka%20(Govt.)%20Polytechnic,%20Mangalore&output=embed"
                  title="College Location"
                  className="w-full h-64 border-0"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Second Section - Distance from Key Locations */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                Distance from Key Locations
              </span>
              <span className="mt-1 text-gray-500 text-sm">
                Distance Information
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Distance From Popular Destinations
              </h2>
              <table className="table-auto w-full text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-gray-700">Destination</th>
                    <th className="px-4 py-2 text-gray-700">Distance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-t px-4 py-2">Mangalore Airport</td>
                    <td className="border-t px-4 py-2">09 km</td>
                  </tr>
                  <tr>
                    <td className="border-t px-4 py-2">
                      Mangalore Central Railway Station
                    </td>
                    <td className="border-t px-4 py-2">04 km</td>
                  </tr>
                  <tr>
                    <td className="border-t px-4 py-2">
                      Mangalore Junction Railway Station
                    </td>
                    <td className="border-t px-4 py-2">05 km</td>
                  </tr>
                  <tr>
                    <td className="border-t px-4 py-2">
                      Surathkal Railway Station
                    </td>
                    <td className="border-t px-4 py-2">14 km</td>
                  </tr>
                  <tr>
                    <td className="border-t px-4 py-2">Mangalore Bus Stand</td>
                    <td className="border-t px-4 py-2">2.5 km</td>
                  </tr>
                  <tr>
                    <td className="border-t px-4 py-2">Udupi Bus Stand</td>
                    <td className="border-t px-4 py-2">55 km</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Third Section - Travel Times */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-0 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                Travel Times
              </span>
              <span className="mt-1 text-gray-500 text-sm">
                Travel Duration
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Travel Time and Distance from Popular Cities
              </h2>
              <table className="table-auto w-full text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-gray-700">By Bus</th>
                    <th className="px-4 py-2 text-gray-700">By Train</th>
                    <th className="px-4 py-2 text-gray-700">By Air</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-t px-4 py-2">From Mumbai: 22 hrs</td>
                    <td className="border-t px-4 py-2">From Mumbai: 18 hrs</td>
                    <td className="border-t px-4 py-2">
                      From Bangalore: 40 mins
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t px-4 py-2">
                      From Bangalore: 7 hrs
                    </td>
                    <td className="border-t px-4 py-2">From Chennai: 18 hrs</td>
                    <td className="border-t px-4 py-2">
                      From Mumbai: 1 hour 20 mins
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t px-4 py-2">From Mysore: 7 hrs</td>
                    <td className="border-t px-4 py-2">
                      From Trivandrum: 18 hrs
                    </td>
                    <td className="border-t px-4 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border-t px-4 py-2">From Goa: 8 hrs</td>
                    <td className="border-t px-4 py-2">
                      From New Delhi: 40 hrs
                    </td>
                    <td className="border-t px-4 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border-t px-4 py-2">
                      From Ernakulam: 22 hrs
                    </td>
                    <td className="border-t px-4 py-2">
                      From Ernakulam: 9 hrs
                    </td>
                    <td className="border-t px-4 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border-t px-4 py-2">
                      From Hyderabad: 24 hrs
                    </td>
                    <td className="border-t px-4 py-2">
                      From Calcutta (via Chennai): 50 hrs
                    </td>
                    <td className="border-t px-4 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border-t px-4 py-2">From Bijapur: 14 hrs</td>
                    <td className="border-t px-4 py-2">
                      From Jammu Tawi (via New Delhi): 60 hrs
                    </td>
                    <td className="border-t px-4 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border-t px-4 py-2">From Hubli: 7 hrs</td>
                    <td className="border-t px-4 py-2">
                      From Guwahati (via Calcutta): 72 hrs
                    </td>
                    <td className="border-t px-4 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border-t px-4 py-2">From Belgaum: 9 hrs</td>
                    <td className="border-t px-4 py-2"></td>
                    <td className="border-t px-4 py-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowtoReach;
