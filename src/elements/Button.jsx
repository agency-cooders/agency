import React from "react";

const Button = ({ content, classNames }) => {
  return (
    <div className={`text-center ${classNames}`}>
      <button className="relative z-10 px-[18px] py-2 font-bold uppercase text-primary transition-colors duration-500 border-2 border-primary rounded-none overflow-hidden group hover:text-primary-background cursor-pointer">
        <span className="relative z-20">{content}</span>
        <span className="absolute inset-0 bg-primary-background rounded-none z-[-1]"></span>
        <span className="absolute inset-0 flex items-center justify-center h-full filter-[url(#goo)]">
          <span className="absolute top-[2px] left-0 w-[25%] h-full bg-primary rounded-none transform translate-y-[150%] scale-[1.7] transition-transform duration-450 group-hover:translate-y-0 group-hover:scale-[1.4] delay-0"></span>
          <span className="absolute top-[2px] left-[30%] w-[25%] h-full bg-primary rounded-none transform translate-y-[150%] scale-[1.7] transition-transform duration-450 group-hover:translate-y-0 group-hover:scale-[1.4] delay-75"></span>
          <span className="absolute top-[2px] left-[60%] w-[25%] h-full bg-primary rounded-none transform translate-y-[150%] scale-[1.7] transition-transform duration-450 group-hover:translate-y-0 group-hover:scale-[1.4] delay-150"></span>
          <span className="absolute top-[2px] left-[90%] w-[25%] h-full bg-primary rounded-none transform translate-y-[150%] scale-[1.7] transition-transform duration-450 group-hover:translate-y-0 group-hover:scale-[1.4] delay-225"></span>
        </span>
      </button>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
              result="goo"
            />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Button;
