import React from "react";

const NavItem = ({ content }) => {
  return (
    <div className="hover:bg-overlay flex items-center cursor-pointer px-[10px] pt-[6px] pb-2">
      <span>{content}</span>
    </div>
  );
};

export default NavItem;
