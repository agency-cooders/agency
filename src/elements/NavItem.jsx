import React from "react";

const NavItem = ({ content, selected, handleNavItemClicked }) => {
  return (
    <div
      className={`${
        selected ? "bg-overlay" : ""
      } flex items-center cursor-pointer px-[10px] pt-[6px] pb-2`}
      onClick={handleNavItemClicked}>
      <span>{content}</span>
    </div>
  );
};

export default NavItem;
