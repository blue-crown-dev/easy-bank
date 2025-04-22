// Placeholder image paths - replace with your actual paths
const bgIntroDesktop = "/bg-intro-desktop.svg"; // Example path
const bgIntroMobile = "/bg-intro-mobile.svg"; // Example path
const imageMockups = "/hero.png"; // Example path

const Hero = () => {
  return (
    <section className="relative bg-slate-950 w-full overflow-hidden lg:overflow-visible ">
      <div>
        {/* Flex container for columns */}
        <div className="flex flex-col-reverse lg:flex-row items-center">
          {/* Left Column (Text Content) */}
          <div className="w-full lg:w-6/12 xl:w-4/12 px-6 lg:px-8 pt-16 pb-10 lg:py-0 text-center lg:text-left z-10">
            <h1 className="text-white text-4xl md:text-5xl lg:text-[3rem] lg:leading-tight font-light mb-5">
              Next generation digital banking!!!!
            </h1>
            <p className="text-white text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3  rounded-full text-base font-medium text-white bg-gradient-to-r from-green-600 to-cyan-600 hover:opacity-80 transition-opacity duration-200"
            >
              Request Invite
            </a>
          </div>
          <div className="w-full lg:w-7/12 xl:w-8/12 relative lg:min-h-screen xl:min-h-[700px] lg:overflow-hidden">
            {/* Background SVG Layer - Positioned relative to this Right Column */}
            <picture className="absolute inset-0 z-0 pointer-events-none">
              {" "}
              {/* Picture fills parent, no interaction */}
              {/* Desktop Source */}
              <source media="(min-width: 1024px)" srcSet={bgIntroDesktop} />
              {/* Mobile Source (and fallback) */}
              <img
                src={bgIntroMobile}
                alt="" // Decorative
                className="w-full h-full object-cover object-bottom   lg:object-contain lg:object-left-top transform scale-[1.8] translate-y-[25%] lg:scale-150 lg:translate-x-[20%] lg:-translate-y-[20%] xl:translate-x-[40%]" // Adjust scale/translate
                aria-hidden="true"
              />
            </picture>

            {/* Phone Mockups Layer - Also relative to Right Column */}
            {/* Adjusted positioning slightly */}
            <img
              src={imageMockups}
              alt="Easybank app mockups"
              className="relative lg:absolute z-[5]
                           w-[85%] max-w-md lg:w-auto lg:max-w-none
                           mx-auto lg:mx-0
                           -mt-32 sm:-mt-40 md:-mt-52 lg:mt-0
                           lg:top-[-90px] xl:top-[-120px]
                           lg:-right-20 xl:-right-40
                           lg:h-[750px] xl:h-[880px]
                           "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
