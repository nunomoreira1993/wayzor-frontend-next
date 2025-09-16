import React from "react";

const BlogSection = () => {
  const blogPosts = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/f5dccee1f060b2667b6023b1980e509254d0ce5b?width=1052",
      category: "Driving Tips",
      title: "Family holidays made easy",
      description:
        "Planning a weekend getaway or a longer adventure with the kids? The perfect car brings comfort, safety, and peace of mind to every mile.",
      width: "526px",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/f2048b43251d7614b1851d781e2f6a9b126852e5?width=720",
      category: "Driving Tips",
      title: "Visit Azores in 3 days",
      description:
        "There are endless reasons to explore São Miguel in the Azores. From shimmering lagoons to emerald-green mountains, every turn reveals a breathtaking moment you'll never forget.",
      width: "360px",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/e1c090ab8df2648a4f81f7e37fdee75da6eeb0ab?width=720",
      category: "waYzor business",
      title: "Drive your Business forward",
      description:
        "Discover how your company can stay ahead with smart, flexible mobility solutions, fully digital and tailored to your business needs.",
      width: "360px",
    },
  ];

  return (
    <section className="py-20 bg-bg-light-soft">
      <div className="w-full flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-16 max-w-[864px] text-center">
          <h2 className="text-[40px] font-lato font-bold text-content-dark-strong leading-[125%]">
            Highlights that move with you
          </h2>
          <p className="text-[20px] font-lato font-normal text-content-dark-strong leading-[140%]">
            Travel tips, exclusive deals, and Azores highlights, all in one place.
          </p>
        </div>

        {/* Blog Cards Container */}
        <div className="w-full max-w-[1310px] flex flex-col items-center gap-10">
          {/* Desktop: 3 Cards in a Row */}
          <div className="hidden lg:flex items-start gap-8 w-full justify-center">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="flex flex-col gap-4"
                style={{ width: post.width }}
              >
                {/* Image */}
                <div className="w-full h-[304px] rounded-xl overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  {/* Category and Title */}
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-lato font-bold text-wayzor-green uppercase tracking-wider leading-[150%]">
                      {post.category}
                    </span>
                    <h3 className="text-2xl font-lato font-bold text-content-dark-strong leading-[130%]">
                      {post.title}
                    </h3>
                  </div>

                  {/* Description and Button */}
                  <div className="flex flex-col gap-2">
                    <p className="text-base font-lato font-normal text-content-dark-strong leading-[150%]">
                      {post.description}
                    </p>
                    <button className="text-base font-lato font-semibold text-wayzor-green hover:text-wayzor-green-dark transition-colors duration-300 text-left leading-[150%]">
                      Read more
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Mobile: Stacked Cards */}
          <div className="flex flex-col gap-8 lg:hidden px-4">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="flex flex-col gap-4 max-w-sm mx-auto w-full"
              >
                {/* Image */}
                <div className="w-full h-[240px] rounded-xl overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  {/* Category and Title */}
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-lato font-bold text-wayzor-green uppercase tracking-wider leading-[150%]">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-lato font-bold text-content-dark-strong leading-[130%]">
                      {post.title}
                    </h3>
                  </div>

                  {/* Description and Button */}
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-lato font-normal text-content-dark-strong leading-[150%]">
                      {post.description}
                    </p>
                    <button className="text-sm font-lato font-semibold text-wayzor-green hover:text-wayzor-green-dark transition-colors duration-300 text-left leading-[150%]">
                      Read more
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
