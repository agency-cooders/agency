import React from "react";
import ContentArea from "@/elements/ContentArea";
import Marquee from "react-fast-marquee";
import StackIcon from "tech-stack-icons";
import { techStack } from "@/data/TechStack";

const Ribbon = () => {
  return (
    <div className="py-8">
      <Marquee pauseOnHover speed={70} autoFill={true}>
        {techStack.map((name, index) => (
          <StackIcon
            key={index}
            name={name}
            className="mx-3 sm:mx-9"
            style={{ width: 60, height: 60 }}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Ribbon;
