import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/57a037179d6c85c633005116e350ede4ccf0590c?width=3370" 
          alt="Azores landscape"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left Column - Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-lato font-bold text-white leading-tight mb-4">
                Your journey, your rules, your Azores.
              </h1>
              <p className="text-lg text-white font-lato font-medium mb-8 max-w-md">
                Wayzor. Freedom starts here.
              </p>
              <button className="inline-flex items-center px-10 py-5 border-2 border-wayzor-green rounded-full bg-bg-overlay-black-10 backdrop-blur-sm hover:bg-wayzor-green hover:text-black transition-all duration-300">
                <span className="text-white hover:text-black font-lato font-bold text-base">
                  More about us
                </span>
              </button>
            </div>

            {/* Right Column - Empty space for layout balance */}
            <div className="lg:w-1/2"></div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-2.5">
        <div className="w-10 h-1 bg-white rounded-full"></div>
        <div className="w-10 h-1 bg-white bg-opacity-50 rounded-full"></div>
        <div className="w-10 h-1 bg-white bg-opacity-50 rounded-full"></div>
      </div>

      {/* Navigation Arrow */}
      <button className="absolute bottom-32 right-16 lg:right-32 w-23 h-23 rounded-full bg-bg-overlay-black-10 backdrop-blur-sm hover:bg-white hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M21.4538 9.25628C21.7923 8.91457 22.341 8.91457 22.6795 9.25628L28.7462 15.3813C29.0846 15.723 29.0846 16.277 28.7462 16.6187L22.6795 22.7437C22.341 23.0854 21.7923 23.0854 21.4538 22.7437C21.1154 22.402 21.1154 21.848 21.4538 21.5063L26.041 16.875H3.86667C3.38802 16.875 3 16.4832 3 16C3 15.5168 3.38802 15.125 3.86667 15.125L26.041 15.125L21.4538 10.4937C21.1154 10.152 21.1154 9.59799 21.4538 9.25628Z" fill="white"/>
        </svg>
      </button>
    </section>
  );
};

export default HeroSection;
