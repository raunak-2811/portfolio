import React from "react";
import Title from "../layouts/Title";
import { a1, a2, a3, a4, a5, a6 } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <a
          href="https://www.linkedin.com/posts/raunak-gupta-53a8b424b_html-css-javascript-activity-7133069466120183809-kBkk?utm_source=share&utm_medium=member_desktop"
          target="blank"
        >
          <ProjectsCard
            title="Porfolio Website"
            des=" I designed a basic and responsive personal portfolio website by using Html, Css and React.js. "
            src={a3}
          />
        </a>
        <a
          href="https://www.linkedin.com/posts/raunak-gupta-53a8b424b_webdevelopment-css-webdesign-activity-7253642644583587840-8s2z?utm_source=share&utm_medium=member_desktop"
          target="blank"
        >
          <ProjectsCard
            title="Personal Blog Website"
            des=" I designed a  fully functional and responsive perosnal Blog webapplication by using Node.js, Html, Tailwind Css , React.js and Javascript. "
            src={a5}
          />
        </a>
        <a
          href="https://www.linkedin.com/posts/raunak-gupta-53a8b424b_kotlin-androiddevelopment-androidstudio-activity-7132994993291411456-BFX-?utm_source=share&utm_medium=member_desktop"
          target="blank"
        >
          <ProjectsCard
            title="Weather Android Application"
            des=" Developed a Android App  weather Application where User can see realtime Weather and other details of any city or country . Used technologies are Kotlin,XML and Android Studio."
            src={a4}
          />
        </a>
        <a
          href="https://www.linkedin.com/posts/raunak-gupta-53a8b424b_webdevelopment-opentowork-opentowork-activity-7261354462101790721-GAjt?utm_source=share&utm_medium=member_desktop"
          target="blank"
        >
          <ProjectsCard
            title="URL Shortner website"
            des=" I developed a  responsive and functional URL  Shortner webapplication by using Html,Tailwind Css , Node.js , Javascript , Mongodb and Postman "
            src={a1}
          />
        </a>
        <a
          href="https://www.linkedin.com/posts/raunak-gupta-53a8b424b_html-css-javascript-activity-7132992537698390016-ICNG?utm_source=share&utm_medium=member_desktop"
          target="blank"
        >
          <ProjectsCard
            title="Digital Marketing Website"
            des=" I designed a Modern and Creative Digital Marketing website by using Nodejs, Html,tailwind Css ,React.js and JavaScript. "
            src={a2}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/raunak-gupta-53a8b424b"
          target="blank"
        >
          <ProjectsCard
            title="Qr Based Food Ordering Website"
            des=" I designed a userfreindly website for online food ordering by scanning Qr Code. By using Html,Tailwind Css,Node.js, React.js and Java Script. "
            src={a6}
          />
        </a>
      </div>
    </section>
  );
};

export default Projects;
