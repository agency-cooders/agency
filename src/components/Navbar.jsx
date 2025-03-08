import { navbarItems } from "@/data/header";
import NavItem from "@/elements/NavItem";
import React from "react";

const Navbar = () => {
  return (
    <nav className="hidden md:flex gap-3 items-center">
      {navbarItems.map((navItem, index) => (
        <NavItem key={index} content={navItem} />
      ))}
    </nav>
  );
};

export default Navbar;
