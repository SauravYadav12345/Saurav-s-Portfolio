import React from "react";
import { Zoom, Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white h-screen flex items-center justify-center text-center "
    >
      <div>
        <Zoom>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-wider">
            Hi, I'm <span className="text-yellow-300">Saurav Yadav</span>
          </h1>
        </Zoom>
        <Fade>
          <p className="mt-4 text-xl sm:text-2xl font-light">
            Frontend Developer | React Enthusiast
          </p>
        </Fade>
        <Fade delay={600}>
          <a
            href="#projects"
            className="mt-6 inline-block bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-yellow-400 transition-transform transform hover:scale-105 "
          >
            View My Work
          </a>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
