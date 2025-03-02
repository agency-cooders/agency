import Button from "@/elements/Button";
import ContentArea from "@/elements/ContentArea";
import Logo from "@/elements/Logo";
import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="border-b-1 border-b-overlay">
      <ContentArea classNames="h-20 flex items-center justify-between">
        <Logo />
        <Navbar />
        <Button content="Contact Us" />
      </ContentArea>
    </header>
  );
};

export default Header;
