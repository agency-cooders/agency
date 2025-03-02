import React from "react";
import { X } from "lucide-react";
import { navbarItems } from "@/data/header";

const Drawer = ({ isDrawerOpen, setIsDrawerOpen }) => {
  return (
    <React.Fragment>
      <div
        className={`fixed bg-black inset-0 bg-opacity-10 transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsDrawerOpen(false)}></div>

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-overlay shadow-lg transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <button
          onClick={() => setIsDrawerOpen(false)}
          className="absolute top-4 right-4 p-2">
          <X size={30} className="cursor-pointer hover:text-primary" />
        </button>

        <nav className="mt-12 space-y-4 p-6 text-lg font-semibold">
          {navbarItems.map((navItem, index) => (
            <a
              key={index}
              href="#"
              onClick={() => setIsDrawerOpen(false)}
              className="block hover:text-primary">
              {navItem}
            </a>
          ))}
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Drawer;
