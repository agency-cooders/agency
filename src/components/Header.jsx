import Button from "@/elements/Button";
import ContentArea from "@/elements/ContentArea";
import Logo from "@/elements/Logo";
import React from "react";

const Header = () => {
  return (
    <header className="border-b-1 border-b-zinc-700">
      <ContentArea classNames="h-20 flex items-center justify-between">
        <Logo />
        <Button content="Contact Us" />
      </ContentArea>
    </header>
  );
};

export default Header;
