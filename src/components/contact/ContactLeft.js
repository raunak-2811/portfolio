import React from "react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { SlSocialInstagram } from "react-icons/sl";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Raunak Gupta</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Web Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
           I’m a BTech Computer Science
          student skilled in full-stack web development, graphic design, and
          UI/UX design. I create functional and visually striking digital
          solutions.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 6386615341</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">graunak28@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/im.raunak_?igsh=N2c1aTJ6ZGYwdHg0">
            <span className="bannerIcon">
              <SlSocialInstagram />
            </span>
          </a>
          <a href="https://x.com/RaunakG68078697?t=YxXfowaCaYjbehC-F_ZKqg&s=09">
            <span className="bannerIcon">
              <FaTwitter />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/raunak-gupta-53a8b424b">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
