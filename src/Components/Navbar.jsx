import { useState, useEffect } from "react";
import User from "../assets/Images/userprofile.svg";
import Ham from "../assets/Icons/hamburger.svg";
import X from "../assets/Icons/x.svg";
import Button from "./Button.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => window.alert("Congrats you downloaded the CV!");
  const navigation = [
    "Home",
    "About Me",
    "Services",
    "Projects",
    "Testimonials",
    "Contact",
  ];

  const handleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="flex justify-between pl-5 pr-16 md:justify-around items-center fixed w-full bg-white z-50 p-3 md:p-6 shadow-primary">
      {/* Profile Section */}
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center justify-center rounded-full h-[60px] w-[60px] shadow-primary overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={User}
            alt="User profile"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-header text-2xl uppercase">Ujwal Paudel</h1>
          <span className="font-semibold text-[0.80rem]">Web Developer</span>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav>
        <ul className="hidden xl:flex items-center justify-center gap-10">
          {navigation.map((elem, index) => (
            <li key={index} className="hover:text-primary">
              <a
                className="font-header"
                href={`#${elem.toLowerCase().replace(" ", "-")}`}
              >
                {elem}
              </a>
            </li>
          ))}
          <Button label="Download CV" onClick={handleDownload} />
        </ul>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="xl:hidden"
        onClick={handleOpen}
        aria-label="Toggle menu"
      >
        {!isOpen && (
          <img className="w-6 h-6 cursor-pointer" src={Ham} alt="Open Menu" />
        )}
      </button>

      {/* Mobile Nav (Slide-in) */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white z-40 shadow-md transition-transform duration-300 ease-in-out ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <div className="flex justify-start p-5 ml-6 mt-6">
          {isOpen && (
           <button className="w-6 h-6 cursor-pointer">
             <img
              src={X}
              alt="Close Menu"
              onClick={handleOpen}
            />
           </button>
          )}
        </div>

        <ul className="flex flex-col items-center p-5">
          {navigation.map((elem, index) => (
            <li key={index} className="hover:text-primary py-3">
              <a
                className="font-header text-lg"
                href={`#${elem.toLowerCase().replace(" ", "-")}`}
                onClick={() => setIsOpen(false)}
              >
                {elem}
              </a>
            </li>
          ))}
          <Button label="Download CV" onClick={handleDownload} />
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
