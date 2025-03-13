import React, { useRef, useEffect, useState } from "react";
import NavItem from "./NavItem";

const Heading = ({ title }) => {
  const titleRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(-1);

  useEffect(() => {
    if (titleRef.current) {
      setWidth(titleRef.current.offsetWidth);
    }
  }, [title]);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-black flex flex-col items-center justify-center overflow-hidden rounded-md pb-10 -ml-1">
        <h1 ref={titleRef} className="font-semibold text-center relative z-20">
          <NavItem
            content={title}
            size="md:text-4xl text-3xl lg:text-[40px] "
          />
        </h1>
        <div className="relative mt-[2px]" style={{ width: width * 1.1 }}>
          <div className="absolute left-1/2 top-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#9eff00] to-transparent h-[1.3px] w-full opacity-60" />
          <div className="absolute left-1/2 top-[2px] translate-y-1 -translate-x-1/2 bg-[#9eff00] h-[2px] w-[80%] blur-lg opacity-40" />
          <div className="absolute left-1/2 top-[5px] translate-y-1 -translate-x-1/2 bg-[#9eff00] h-[10px] w-[60%] blur-lg opacity-30" />
        </div>
      </div>
    </div>
  );
};

export default Heading;
