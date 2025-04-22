// Placeholder image paths - replace with your actual paths
const imageCurrency = "/image-currency.jpg";
const imageRestaurant = "/image-restaurant.jpg";
const imagePlane = "/image-plane.jpg";
const imageConfetti = "/image-confetti.jpg";

const articlesData = [
  {
    imageUrl: imageCurrency,
    author: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    snippet:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    linkUrl: "#", // Placeholder link
  },
  {
    imageUrl: imageRestaurant,
    author: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    snippet:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    linkUrl: "#",
  },
  {
    imageUrl: imagePlane,
    author: "By Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    snippet:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    linkUrl: "#",
  },
  {
    imageUrl: imageConfetti,
    author: "By Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    snippet:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …",
    linkUrl: "#",
  },
];

const Blog = () => {
  return (
    <section className="bg-slate-950 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-white text-3xl md:text-4xl font-light mb-10 md:mb-12 text-center md:text-left">
          Latest Articles
        </h2>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {articlesData.map((article, index) => (
            <article
              key={index}
              className="bg-slate-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <a
                href={article.linkUrl}
                className="block aspect-video overflow-hidden"
              >
                {" "}
                {/* Fixed aspect ratio */}
                <img
                  src={article.imageUrl}
                  alt={`Article illustration for ${article.title}`} // More descriptive alt text
                  className="w-full h-full object-cover " // Ensure image covers area
                />
              </a>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {" "}
                {/* flex-grow makes content area take remaining space */}
                <p className="text-green-400 text-xs mb-2">{article.author}</p>
                <h3 className="text-white text-base font-medium mb-2 leading-tight">
                  <a
                    href={article.linkUrl}
                    className="text-gray-300 transition-colors duration-200"
                  >
                    {article.title}
                  </a>
                </h3>
                <p className="text-white text-sm leading-relaxed line-clamp-3 flex-grow">
                  {" "}
                  {/* line-clamp limits text, flex-grow pushes content down if space */}
                  {article.snippet}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
