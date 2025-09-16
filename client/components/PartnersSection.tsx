import React from "react";

const PartnersSection = () => {
  const partnerLogos = [
    "https://api.builder.io/api/v1/image/assets/TEMP/0f7d0e4916a7b87489e5a50c58e75867c738beab?width=262",
    "https://api.builder.io/api/v1/image/assets/TEMP/11466f9aecb474d387bea3e9caebe5fad97f290a?width=312",
    "https://api.builder.io/api/v1/image/assets/TEMP/848b217801204eb6b6bfc18693bea9248288d3f3?width=312",
    "https://api.builder.io/api/v1/image/assets/TEMP/c23853c82c636ba2b29fc750440c79956256b4f4?width=312",
    "https://api.builder.io/api/v1/image/assets/TEMP/04f261d183391834ad77cad7445e870629a9109b?width=312",
    "https://api.builder.io/api/v1/image/assets/TEMP/fc997dc05241043ebc1c4451ad607b7989eecc10?width=312",
    "https://api.builder.io/api/v1/image/assets/TEMP/b06ea76508b3bfc8dc260adb79f099eb32555d6c?width=312",
    "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=312",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-[1680px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="max-w-[1440px] mx-auto">
          {/* Mobile Layout */}
          <div className="flex flex-col items-center gap-8 lg:hidden">
            <div className="text-center max-w-sm">
              <h2 className="text-3xl font-lato font-bold text-content-dark-medium mb-8 leading-tight">
                Appreciated by Our Partners
              </h2>
              <button className="inline-flex items-center px-6 py-4 border-2 border-wayzor-green rounded-full hover:bg-wayzor-green hover:text-black transition-all duration-300">
                <span className="text-wayzor-green hover:text-black font-lato font-semibold text-base">
                  Meet Our Partners
                </span>
              </button>
            </div>

            {/* Mobile Partner Logos Grid */}
            <div className="w-full max-w-sm grid grid-cols-2 gap-6">
              {partnerLogos.slice(0, 4).map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    className="max-w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                    style={{ maxHeight: "50px" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:flex-row items-center gap-16 xl:gap-20">
            {/* Left Column - Text and Button */}
            <div className="lg:w-1/3 text-left">
              <h2 className="text-4xl xl:text-5xl font-lato font-bold text-content-dark-medium mb-8 leading-tight">
                Appreciated by Our Partners
              </h2>
              <button className="inline-flex items-center px-8 py-4 border-2 border-wayzor-green rounded-full hover:bg-wayzor-green hover:text-black transition-all duration-300 group">
                <span className="text-wayzor-green group-hover:text-black font-lato font-semibold text-lg">
                  Meet Our Partners
                </span>
              </button>
            </div>

            {/* Right Column - Partner Logos */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-4 gap-8 xl:gap-10">
                {partnerLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 hover:scale-105 transition-all duration-300 min-h-[100px]"
                  >
                    <img
                      src={logo}
                      alt={`Partner ${index + 1}`}
                      className="max-w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                      style={{ maxHeight: "60px" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 rounded-full transition-all duration-300 border border-gray-200">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.59144 13.4038C6.33109 13.6641 5.90891 13.6641 5.64856 13.4038L1.65856 9.41378C1.39821 9.15343 1.39821 8.73124 1.65856 8.47089L5.64856 4.48089C5.90891 4.22054 6.33109 4.22054 6.59144 4.48089C6.85179 4.74124 6.85179 5.16343 6.59144 5.42378L3.68022 8.33499L17.75 8.33499C18.1297 8.33499 18.4375 8.64277 18.4375 9.02234C18.4375 9.4019 18.1297 9.70968 17.75 9.70968L3.68022 9.70968L6.59144 12.6209C6.85179 12.8812 6.85179 13.3034 6.59144 13.4038Z"
                  fill="#6B7280"
                />
              </svg>
            </button>
            <button className="w-12 h-12 flex items-center justify-center bg-wayzor-green hover:bg-wayzor-green-dark rounded-full transition-all duration-300 group">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.4086 4.48089C13.6689 4.22054 14.0911 4.22054 14.3514 4.48089L18.3414 8.47089C18.6018 8.73124 18.6018 9.15343 18.3414 9.41378L14.3514 13.4038C14.0911 13.6641 13.6689 13.6641 13.4086 13.4038C13.1482 13.1434 13.1482 12.7212 13.4086 12.4609L16.3198 9.54968H2.25C1.87043 9.54968 1.5625 9.2419 1.5625 8.86234C1.5625 8.48277 1.87043 8.17499 2.25 8.17499H16.3198L13.4086 5.26378C13.1482 5.00343 13.1482 4.58124 13.4086 4.48089Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
