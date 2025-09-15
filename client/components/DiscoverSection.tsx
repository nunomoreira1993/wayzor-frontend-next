import React from 'react';

const DiscoverSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://api.builder.io/api/v1/image/assets/TEMP/f2048b43251d7614b1851d781e2f6a9b126852e5?width=720")',
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/50 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl pl-4 lg:pl-48">
          <h2 className="text-4xl lg:text-5xl font-lato font-bold text-bg-light-soft leading-tight mb-4">
            Discover the Azores your way
          </h2>
          <p className="text-white font-lato mb-8 max-w-lg leading-relaxed">
            Explore breathtaking landscapes with total freedom.
            Check out our fleet and find the perfect car for your adventure.
          </p>
          <button className="inline-flex items-center px-8 py-4 border-2 border-wayzor-green rounded-full bg-bg-overlay-black-05 backdrop-blur-sm hover:bg-wayzor-green hover:text-black transition-all duration-300">
            <span className="text-white hover:text-black font-lato font-bold text-sm">
              Explore our Fleet
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
