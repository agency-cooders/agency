import React from "react";

const NavItem = ({ content }) => {
  return (
    <div className="text-center">
      <span className="relative font-medium uppercase overflow-hidden group inline-flex transition-colors duration-300 hover:text-[#9eff00] hover:font-bold cursor-pointer">
        {content.split("").map((char, index) => (
          <span
            key={index}
            className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-y-[-4px] group-hover:scale-110"
            style={{
              transitionDelay: `${index * 35}ms`,
              display: "inline-block",
            }}>
            {char}
          </span>
        ))}
      </span>
    </div>
  );
};

export default NavItem;
