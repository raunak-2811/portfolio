import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Full Stack Web Developer"
          des="I create scalable, responsive web applications using modern frameworks, ensuring robust functionality and smooth user interactions."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Android Developer"
          des="I design and develop intuitive, high-performance Android apps that prioritize user experience and functionality for seamless mobile interactions."
          icon={<SiProgress />}
        />

        <Card
          title="UI/UX Graphic Designer"
          des="I craft visually engaging and user-centered designs, focusing on aesthetics and usability to create impactful digital experiences."
          icon={<SiAntdesign />}
        />
      </div>
    </section>
  );
};

export default Features;
