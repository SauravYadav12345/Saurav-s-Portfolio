import React from "react";
import { Bounce } from "react-awesome-reveal";

const Skills = () => {
  const skills = [
    "React.js",
    "Next.js",
    "Javascript",
    "Tailwind.CSS",
    "Bootstrap",
    "HTML",
    "CSS",
    "EJS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Core-Java",
    "Firebase",
    "Git & Github",
  ];
  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-16 "
    >
      <div className="container mx-auto px-4 text-white">
        <h2 className=" text-4xl font-extrabold text-center mt-5 mb-8 ">
          <span className="text-yellow-300">My</span>Skills
        </h2>
        <Bounce cascade damping={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white text-gray-900 font-semibold py-4 text-center rounded-lg hover:scale-110 hover:bg-yellow-300 transition-all duration-300 shadow-lg"
              >
                {skill}
              </div>
            ))}
          </div>
        </Bounce>
      </div>
    </section>
  );
};

export default Skills;
