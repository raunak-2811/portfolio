import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { logo } from "../../assets/index";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12 rounded-md shadow-lg">
      <div className="container p-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <img
            className="w-32 mb-4 transform hover:scale-105 transition-transform duration-300"
            src={logo}
            alt="logo"
          />
          <p className="text-gray-400 mb-4 text-center md:text-left">
            Hi, I'm Raunak Gupta, a passionate developer. Let's connect!
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/im.raunak_?igsh=N2c1aTJ6ZGYwdHg0"
              className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
            >
              <SlSocialInstagram size={24} />
            </a>
            <a
              href="https://x.com/RaunakG68078697?t=YxXfowaCaYjbehC-F_ZKqg&s=09"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/raunak-gupta-53a8b424b"
              className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://github.com/raunak-2811"
              className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
          <p className="text-gray-400 mb-4">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
          <p className="text-gray-400">Email: raunak28@gmail.com</p>
          <p className="text-gray-400">Phone: +91 6386615341</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
