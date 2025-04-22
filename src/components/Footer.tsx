import { Facebook, Youtube, Twitter, Instagram } from "lucide-react";

const logoWhiteSrc = "/logo.svg";

const socialLinks = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Youtube, href: "#", label: "YouTube" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Instagram, href: "#", label: "Instagram" },
];

const footerLinksCol1 = [
  { name: "About Us", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Blog", href: "#" },
];

const footerLinksCol2 = [
  { name: "Careers", href: "#" },
  { name: "Support", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-16">
          {/* Left Section: Logo & Social */}
          <div className="flex flex-col items-center md:items-start space-y-8">
            {/* Logo */}
            <a href="#" title="easybank homepage">
              <img
                className="h-5 w-auto" // Adjust height as needed
                src={logoWhiteSrc}
                alt="easybank"
              />
            </a>
            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank" // Optional: Open in new tab
                  rel="noopener noreferrer" // Optional: Security for new tab
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  <link.Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Middle Section: Links */}
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-3 text-center md:text-left">
            {/* Column 1 */}
            <div className="flex flex-col space-y-3">
              {footerLinksCol1.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-gray-300 text-sm transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
            {/* Column 2 */}
            <div className="flex flex-col space-y-3">
              {footerLinksCol2.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-gray-300 text-sm transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Right Section: CTA & Copyright */}
          {/* Use ml-auto on desktop to push right if needed, but justify-between on parent should handle it */}
          <div className="flex flex-col items-center md:items-end space-y-6 text-center md:text-right mt-6 md:mt-0">
            {/* CTA Button */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-full text-base font-medium text-white bg-gradient-to-r from-green-600 to-cyan-600 hover:opacity-80 transition-opacity duration-200"
            >
              Request Invite
            </a>
            {/* Copyright */}
            <p className="text-white text-xs">
              © EasyBank. All Rights Reserved.
            </p>
          </div>
        </div>

        <div className="text-center mt-8 pt-6 border-t border-gray-700/50">
          <p className="text-white text-xs">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              href="https://syedumaircodes.netlify.app"
              className="text-cyan-600 hover:underline"
            >
              Syed Umair Ali
            </a>
            . {/* Add your link if desired */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
