import React from "react";

const Button = ({ content }) => {
  return (
    <button
      className={`px-[10px] py-[5px] border border-primary text-primary cursor-pointer font-medium flex hover:bg-lime-950`}>
      <span className="pb-[2px]">{content}</span>
    </button>
  );
};

export default Button;
