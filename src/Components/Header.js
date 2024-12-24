import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  // Toggle function for hamburger menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider">
          Saurav Yadav
        </h1>

        <nav>
          {/* Hamburger Menu for Small Screens */}
          <button className="sm:hidden text-2xl" onClick={toggleMenu}>
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white"></span>
          </button>

          {/* Mobile Menu */}
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } sm:flex space-x-6 mt-4 sm:mt-0 sm:flex-row`}
          >
            <Fade cascade>
              <li>
                <a
                  href="#about"
                  className="text-lg sm:text-xl hover:text-yellow-400 transition duration-300 transform hover:scale-105"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-lg sm:text-xl hover:text-yellow-400 transition duration-300 transform hover:scale-105"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-lg sm:text-xl hover:text-yellow-400 transition duration-300 transform hover:scale-105"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-lg sm:text-xl hover:text-yellow-400 transition duration-300 transform hover:scale-105"
                >
                  Contact
                </a>
              </li>
            </Fade>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
