import React from "react";

const Logo = () => {
  return (
    <svg
      className="w-12 h-12 fill-primary-color hover:fill-lime-500 cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 46 46">
      <polygon opacity={0.7} points="45,11 36,11 35.5,1" />
      <polygon points="35.5,1 25.4,14.1 39,21" />
      <polygon opacity={0.4} points="17,9.8 39,21 17,26" />
      <polygon opacity={0.7} points="2,12 17,26 17,9.8" />
      <polygon opacity={0.7} points="17,26 39,21 28,36" />
      <polygon points="28,36 4.5,44 17,26" />
      <polygon points="17,26 1,26 10.8,20.1" />
    </svg>
  );
};

export default Logo;
