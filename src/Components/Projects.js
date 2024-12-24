import React from "react";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  const projects = [
    {
      title: "IndoStyleMart",
      description:
        "IndoStyleMart is a full-stack E-Com web app for Online shopping using (React.js, Tailwind.CSS, Redux & Firebase). The app includes features such as (Add-To-Cart, Admin & User Dashboard, Buy-Now function and the ability to delete orders).",
      link: "https://indo-style-mart-ecom.vercel.app/",
    },
    {
      title: "PersonalPortfolio",
      description:
        "Personal Portfolio website made using (React.js, Tailwind.CSS, React-icons & React-Awesome)",
      link: "https://saurav-s-portfolio.vercel.app/",
    },
    {
      title: "WeatherDashboard",
      description:
        "WeatherDashboard is a frontend website buid using (HTML, CSS, JS & OpenWeatherMap API's) where the user can search for temperature of his current location and also temperature of any city in the world along with temperature the following details are also included in the data(Humidity, Air Pressure, Wind Speed, Cloud Coverage, Sunrise, Sunset). ",
      link: "https://weather-dashboard-application-delta.vercel.app/",
    },
    {
      title: "CollagePin",
      description:
        "CollagePin is a full-stack Web App built using (EJS, Tailwind.CSS, Node.js, Express.js & MongoDB). The app includes features such as (Creating Virtual Pinboards, provides a personalized feed based on user interest, admin with different roles).",
      link: "https://github.com/SauravYadav12345/CollagePin",
    },
    {
      title: "HuntSearchEngine",
      description:
        "HuntSearchEngine is a Search Engine Website build using (Next.js, Tailwind.CSS & Google API's) where the user can search anything which he searches on google",
      link: "https://github.com/SauravYadav12345/HuntSearchEngine",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-16"
    >
      <div className="container mx-auto px-4">
        <Fade>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mt-6 mb-12 tracking-wide">
            My Projects
          </h2>
        </Fade>
        <Fade cascade damping={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-4 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div className="p-6">
                  <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-600 hover:text-blue-700 transition duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Projects;
