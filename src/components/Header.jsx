import Button from "@/elements/Button";
import ContentArea from "@/elements/ContentArea";
import Logo from "@/elements/Logo";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { Menu } from "lucide-react";
import Drawer from "./Drawer";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="border-b-1 border-b-overlay">
      <ContentArea classNames="h-20 flex items-center justify-between">
        <Logo />
        <Navbar />
        <Button content="Contact Us" classNames="hidden md:flex" />
        <Menu
          size={30}
          className="md:hidden text-primary cursor-pointer"
          onClick={() => setIsDrawerOpen(true)}
        />
        <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      </ContentArea>
    </header>
  );
};

export default Header;
