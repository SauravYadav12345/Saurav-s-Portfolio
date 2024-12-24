import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-8 text-center">
      <div className="container mx-auto px-4">
        <Fade bottom>
          <p className="text-lg sm:text-xl font-medium mb-4">
            &copy; 2024 Saurav Yadav. All rights reserved.
          </p>
        </Fade>
        <Fade bottom delay={300}>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://github.com/SauravYadav12345"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-500 transition-colors duration-300"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/saurav-yadav-654836295/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-500 transition-colors duration-300"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </Fade>
      </div>
    </footer>
  );
};

export default Footer;
