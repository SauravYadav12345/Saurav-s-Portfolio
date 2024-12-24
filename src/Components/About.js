import React from "react";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-16"
    >
      <div className="container mx-auto px-4">
        <Fade direction="up" triggerOnce>
          <h2 className="text-5xl font-extrabold mt-5 mb-6 text-center tracking-wider">
            About Me
          </h2>
        </Fade>

        <Fade direction="left" triggerOnce>
          <p className="text-xl text-center leading-relaxed max-w-2xl mx-auto">
            I'm a passionate{" "}
            <span className="font-bold">Frontend Developer</span> with a knack
            for crafting interactive and user-friendly web applications. I
            thrive on bringing ideas to life using
            <span className="font-semibold"> React.js</span>,{" "}
            <span className="font-semibold">Next.js</span>, and modern design
            frameworks like <span className="font-semibold">Tailwind CSS</span>{" "}
            and
            <span className="font-semibold"> Bootstrap</span>.
          </p>
        </Fade>

        <div className="flex justify-center mt-8">
          <Fade cascade triggerOnce>
            <a
              href="#contact"
              className="bg-white text-indigo-600 hover:bg-indigo-700 hover:text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
            >
              Contact Me
            </a>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;
