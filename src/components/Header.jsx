import Button from "@/elements/Button";
import ContentArea from "@/elements/ContentArea";
import Logo from "@/elements/Logo";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Drawer from "./Drawer";
import { SparklesCore } from "./ui/sparkles";
import MenuButton from "@/elements/MenuButton";
import { createPortal } from "react-dom";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Header Section */}
      <header className="border-b-1 border-b-overlay">
        <div className="w-full inset-0 h-20 absolute">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.2}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#9eff00"
          />
        </div>
        <ContentArea classNames="h-20 flex items-center justify-between">
          <Logo />
          <Navbar />
          <Button content="Contact Us" classNames="hidden md:flex" />
          <div
            className="md:hidden text-primary cursor-pointer"
            onClick={() => setIsDrawerOpen((prev) => !prev)}>
            <MenuButton isDrawerOpen={isDrawerOpen} />
          </div>
        </ContentArea>
      </header>

      {createPortal(
        <Drawer
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />,
        document.body
      )}
    </>
  );
};

export default Header;
