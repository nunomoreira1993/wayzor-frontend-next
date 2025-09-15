import React from 'react';

const SocialSection = () => {
  // Placeholder images for the Instagram feed
  const instagramPosts = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400&h=600&fit=crop'
  ];

  return (
    <section className="py-20 bg-bg-light-soft">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-lato font-bold text-content-dark-strong mb-4">
            Get Inspired. Follow @wayzorrentacar
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-content-dark-strong font-lato leading-relaxed">
              Capture your best adventures and tag <span className="font-bold">@wayzorrentacar</span>.
              <br />
              Use <span className="font-bold">#AzoresYourWay</span> and show the world what freedom on the road really looks like.
            </p>
          </div>
        </div>

        {/* Instagram Feed Grid */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instagramPosts.map((image, index) => (
              <div 
                key={index}
                className="aspect-[3/4] bg-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group"
              >
                <img 
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Share Button */}
        <div className="text-center">
          <button className="inline-flex items-center px-6 py-4 border-2 border-wayzor-green-dark rounded-full hover:bg-wayzor-green-dark hover:text-white transition-all duration-300">
            <svg 
              width="20" 
              height="21" 
              viewBox="0 0 20 21" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M12.5 5.25C12.0858 5.25 11.75 5.58579 11.75 6C11.75 6.41421 12.0858 6.75 12.5 6.75C12.9142 6.75 13.25 6.41421 13.25 6C13.25 5.58579 12.9142 5.25 12.5 5.25ZM10.25 6C10.25 4.75736 11.2574 3.75 12.5 3.75C13.7426 3.75 14.75 4.75736 14.75 6C14.75 7.24264 13.7426 8.25 12.5 8.25C12.1526 8.25 11.8237 8.17129 11.5299 8.03072L9.06066 10.5L11.5299 12.9693C11.8237 12.8287 12.1526 12.75 12.5 12.75C13.7426 12.75 14.75 13.7574 14.75 15C14.75 16.2426 13.7426 17.25 12.5 17.25C11.2574 17.25 10.25 16.2426 10.25 15C10.25 14.6526 10.3287 14.3237 10.4693 14.0299L8.29551 11.8562C7.88474 12.3992 7.23334 12.75 6.5 12.75C5.25736 12.75 4.25 11.7426 4.25 10.5C4.25 9.25736 5.25736 8.25 6.5 8.25C7.23334 8.25 7.88474 8.60084 8.29551 9.14383L10.4693 6.97006C10.3287 6.67634 10.25 6.34736 10.25 6ZM6.5 9.75C6.08579 9.75 5.75 10.0858 5.75 10.5C5.75 10.9142 6.08579 11.25 6.5 11.25C6.91421 11.25 7.25 10.9142 7.25 10.5C7.25 10.0858 6.91421 9.75 6.5 9.75ZM12.5 14.25C12.0858 14.25 11.75 14.5858 11.75 15C11.75 15.4142 12.0858 15.75 12.5 15.75C12.9142 15.75 13.25 15.4142 13.25 15C13.25 14.5858 12.9142 14.25 12.5 14.25Z" 
                fill="currentColor"
              />
            </svg>
            <span className="text-wayzor-green-dark hover:text-white font-lato font-bold">
              Share
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
