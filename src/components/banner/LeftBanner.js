import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { SlSocialInstagram } from "react-icons/sl";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Web Developer.", "Graphic Designer", "UI&UX Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-blue-500 capitalize">Raunak Gupta</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#3b82f6"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I’m a BTech Computer Science student with a passion for full-stack web
          development, graphic design, and UI/UX design. I combine technical
          skills and creativity to craft user-friendly, visually appealing
          digital experiences.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/raunak-2811" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.instagram.com/im.raunak_?igsh=N2c1aTJ6ZGYwdHg0"
              target="blank"
            >
              <span className="bannerIcon">
                <SlSocialInstagram />
              </span>
            </a>
            <a
              href="https://x.com/RaunakG68078697?t=YxXfowaCaYjbehC-F_ZKqg&s=09"
              target="blank"
            >
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/raunak-gupta-53a8b424b"
              target="blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LeftBanner;
