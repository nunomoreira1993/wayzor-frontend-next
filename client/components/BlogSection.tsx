import React from 'react';

const BlogSection = () => {
  const blogPosts = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/f5dccee1f060b2667b6023b1980e509254d0ce5b?width=1052",
      category: "Driving Tips",
      title: "Family holidays made easy",
      description: "Planning a weekend getaway or a longer adventure with the kids? The perfect car brings comfort, safety, and peace of mind to every mile.",
      size: "large"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/f2048b43251d7614b1851d781e2f6a9b126852e5?width=720",
      category: "Driving Tips",
      title: "Visit Azores in 3 days",
      description: "There are endless reasons to explore São Miguel in the Azores. From shimmering lagoons to emerald-green mountains, every turn reveals a breathtaking moment you'll never forget.",
      size: "medium"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/e1c090ab8df2648a4f81f7e37fdee75da6eeb0ab?width=720",
      category: "waYzor business",
      title: "Drive your Business forward",
      description: "Discover how your company can stay ahead with smart, flexible mobility solutions, fully digital and tailored to your business needs.",
      size: "medium"
    }
  ];

  return (
    <section className="py-20 bg-bg-light-soft">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-lato font-bold text-content-dark-strong mb-2">
            Highlights that move with you
          </h2>
          <p className="text-xl text-content-dark-strong font-lato">
            Travel tips, exclusive deals, and Azores highlights, all in one place.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Large Featured Card */}
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <div className="mb-2">
                    <span className="text-xs font-lato font-bold text-wayzor-green-dark uppercase tracking-wider">
                      {blogPosts[0].category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-lato font-bold text-content-dark-strong mb-3 leading-tight">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-content-dark-strong font-lato leading-relaxed mb-6">
                    {blogPosts[0].description}
                  </p>
                  <button className="text-wayzor-green-dark font-lato font-bold hover:text-wayzor-green transition-colors duration-300">
                    Read more
                  </button>
                </div>
              </article>
            </div>

            {/* Smaller Cards */}
            <div className="space-y-8">
              {blogPosts.slice(1).map((post, index) => (
                <article key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-xs font-lato font-bold text-wayzor-green-dark uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-lato font-bold text-content-dark-strong mb-3 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-content-dark-strong font-lato leading-relaxed mb-4 text-sm">
                      {post.description}
                    </p>
                    <button className="text-wayzor-green-dark font-lato font-bold hover:text-wayzor-green transition-colors duration-300">
                      Read more
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
