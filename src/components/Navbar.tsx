import { useState, useEffect } from "react";
import { AlignRight, X } from "lucide-react";

// Placeholder logo path - replace with your actual logo path
const logoSrc = "/logo.svg"; // Example: place 'logo.svg' in your 'public' folder

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
  ];

  // Effect to prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-slate-950 relative z-40 shadow-sm">
        {" "}
        {/* Increased z-index */}
        <nav
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Top"
        >
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" title="easybank homepage">
                <img
                  className="h-5 sm:h-6 w-auto"
                  src={logoSrc}
                  alt="easybank"
                />
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white hover:text-gray-300 transition-colors duration-200 relative pb-1
                             after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0
                             after:bg-gradient-to-r after:from-lime-400 after:to-cyan-400
                             after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right Section: CTA Button (Desktop) & Mobile Menu Toggle */}
            <div className="flex items-center">
              {/* CTA Button (Visible Desktop) */}
              <a
                href="#"
                className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-green-400 to-cyan-600 hover:opacity-80 transition-opacity duration-200"
              >
                Request Invite
              </a>

              {/* Mobile Menu Button (Visible Mobile) */}
              <div className="md:hidden ml-4">
                {" "}
                {/* ml-4 to space it from potential elements, adjust if needed */}
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
                  aria-controls="mobile-menu-content" // Points to the menu content
                  aria-expanded={isMobileMenuOpen}
                  onClick={toggleMobileMenu}
                >
                  <span className="sr-only">Open main menu</span>
                  {isMobileMenuOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <AlignRight className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* --- Mobile Menu --- */}
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-30 md:hidden transition-opacity duration-300 ease-in-out
                    ${
                      isMobileMenuOpen
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
        onClick={closeMobileMenu} // Close menu when overlay is clicked
        aria-hidden="true" // Hide from screen readers
      ></div>
      {/* Mobile Menu Content Box */}
      <div
        id="mobile-menu-content"
        className={`
          fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-40 md:hidden
          bg-slate-950 rounded-md shadow-xl py-6
          transform transition-all duration-300 ease-in-out origin-top
          ${
            isMobileMenuOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }
        `} // Adjusted positioning and transition
      >
        <nav className="flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1 rounded-md text-base font-medium text-white hover:bg-gray-300 w-full text-center"
              onClick={closeMobileMenu} // Close menu on link click
            >
              {link.name}
            </a>
          ))}
          {/* Optional: You might still want the CTA button here */}
          {/* <div className="pt-4 w-full px-5">
             <a
              href="#"
              className="block w-full text-center px-6 py-2.5 border border-transparent rounded-full text-sm font-medium text-white bg-gradient-to-r from-lime-400 to-cyan-400 hover:opacity-80"
              onClick={closeMobileMenu}
            >
              Request Invite
            </a>
          </div> */}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
