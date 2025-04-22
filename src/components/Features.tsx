import { Smartphone, PiggyBank, Users, GitBranch } from "lucide-react";

const featuresData = [
  {
    Icon: Smartphone, // Use the imported component directly
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    Icon: PiggyBank,
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    Icon: Users,
    title: "Fast Onboarding",
    description:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    Icon: GitBranch, // Icon for Open API
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

const Features = () => {
  return (
    <section className="bg-slate-900 py-17 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-xl mb-12 md:mb-16 text-center md:text-left mx-auto md:mx-0">
          <h2 className="text-white text-3xl md:text-4xl font-light mb-5">
            Why choose Easybank?
          </h2>
          <p className="text-white text-base md:text-lg leading-relaxed">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <div key={index} className="text-center md:text-left">
              {/* Icon Container */}
              <div className="flex justify-center md:justify-start mb-6">
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-bl from-green-400 to-green-700">
                  <feature.Icon
                    className="h-8 w-8 text-white"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Feature Title */}
              <h3 className="text-white text-xl lg:text-2xl font-medium mb-3">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="text-gray-300 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
