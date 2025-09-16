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
          <div className="flex flex-col items-center gap-6 lg:hidden">
            <div className="text-center max-w-sm">
              <h2 className="text-2xl font-lato font-bold text-content-bodytext mb-6 leading-tight">
                Appreciated by Our Partners
              </h2>
              <button className="inline-flex items-center px-5 py-3 border-2 border-wayzor-green-dark rounded-full hover:bg-wayzor-green-dark hover:text-white transition-all duration-300">
                <span className="text-wayzor-green-dark hover:text-white font-lato font-medium text-sm">
                  Meet Our Partners
                </span>
              </button>
            </div>

            {/* Mobile Partner Logos Grid */}
            <div className="w-full max-w-sm grid grid-cols-2 gap-4">
              {partnerLogos.slice(0, 4).map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-3 hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    className="max-w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
                    style={{ maxHeight: "60px" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Column - Text and Button */}
            <div className="lg:w-1/3 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-lato font-bold text-content-bodytext mb-6 leading-tight">
                Appreciated by Our Partners
              </h2>
              <button className="inline-flex items-center px-6 py-4 border-2 border-wayzor-green-dark rounded-full hover:bg-wayzor-green-dark hover:text-white transition-all duration-300">
                <span className="text-wayzor-green-dark hover:text-white font-lato font-medium">
                  Meet Our Partners
                </span>
              </button>
            </div>

            {/* Right Column - Partner Logos */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                {partnerLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={logo}
                      alt={`Partner ${index + 1}`}
                      className="max-w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
                      style={{ maxHeight: "80px" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center mt-8 space-x-6">
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors duration-300">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.5462 22.7437C10.2077 23.0854 9.65896 23.0854 9.32051 22.7437L3.25384 16.6187C2.91539 16.277 2.91539 15.723 3.25384 15.3813L9.32051 9.25628C9.65896 8.91457 10.2077 8.91457 10.5462 9.25628C10.8846 9.59799 10.8846 10.152 10.5462 10.4937L5.95899 15.125L28.1333 15.125C28.612 15.125 29 15.5168 29 16C29 16.4832 28.612 16.875 28.1333 16.875L5.95898 16.875L10.5462 21.5063C10.8846 21.848 10.8846 22.402 10.5462 22.7437Z"
                  fill="black"
                  fillOpacity="0.3"
                />
              </svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-wayzor-green hover:text-white rounded-full transition-colors duration-300">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.4538 9.25628C21.7923 8.91457 22.341 8.91457 22.6795 9.25628L28.7462 15.3813C29.0846 15.723 29.0846 16.277 28.7462 16.6187L22.6795 22.7437C22.341 23.0854 21.7923 23.0854 21.4538 22.7437C21.1154 22.402 21.1154 21.848 21.4538 21.5063L26.041 16.875H3.86667C3.38802 16.875 3 16.4832 3 16C3 15.5168 3.38802 15.125 3.86667 15.125L26.041 15.125L21.4538 10.4937C21.1154 10.152 21.1154 9.59799 21.4538 9.25628Z"
                  fill="#528116"
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
