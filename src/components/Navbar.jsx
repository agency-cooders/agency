import { navbarItems } from "@/data/header";
import NavItem from "@/elements/NavItem";
import React, { useState } from "react";

const Navbar = () => {
  const [navItemSelected, setNavItemSelected] = useState(0);

  const handleNavItemClicked = (index) => {
    setNavItemSelected(index);
  };

  return (
    <nav className="hidden md:flex gap-3 items-center">
      {navbarItems.map((navItem, index) => (
        <NavItem
          key={index}
          content={navItem}
          selected={navItemSelected === index}
          handleNavItemClicked={() => handleNavItemClicked(index)}
        />
      ))}
    </nav>
  );
};

export default Navbar;
