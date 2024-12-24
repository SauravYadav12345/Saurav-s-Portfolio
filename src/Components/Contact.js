import React from "react";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-16"
    >
      <div className="container mx-auto px-4 text-center">
        <Fade delay={300}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 tracking-wider">
            Contact Me
          </h2>
        </Fade>
        <Fade delay={500}>
          <p className="text-lg sm:text-xl mb-4 font-light">
            Email:
            <a
              href="mailto: yosaurav24@gmail.com"
              className="hover:text-yellow-400 transition duration-300"
            >
              yosaurav24@gmail.com
            </a>
          </p>
        </Fade>
        <Fade delay={700}>
          <p className="text-lg sm:text-xl mb-8 font-light">
            Phone:{" "}
            <a
              href="tel:+919137781533"
              className="hover:text-yellow-400 transition duration-300"
            >
              +91-9137781533
            </a>
          </p>
        </Fade>
        <Fade delay={900}>
          <p className="font-light text-md sm:text-xl">
            Feel free to reach out for any collaborations or inquiries. I look
            forward to connecting with you!
          </p>
        </Fade>
      </div>
    </section>
  );
};

export default Contact;