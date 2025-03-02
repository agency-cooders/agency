import React from "react";

const Button = ({ content, classNames }) => {
  return (
    <button
      className={`px-[10px] py-[5px] border border-primary text-primary cursor-pointer font-medium flex hover:bg-lime-950 ${classNames}`}>
      <span className="pb-[2px]">{content}</span>
    </button>
  );
};

export default Button;
