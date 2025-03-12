import React, { useEffect, useState } from "react";
import { FloatingDock } from "./ui/floating-dock";
import { dockItems } from "@/data/header";

const FloatingHeader = () => {
  const [showFloatingDock, setShowFloatingDock] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowFloatingDock(true);
      } else {
        setShowFloatingDock(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <React.Fragment>
      {showFloatingDock ? (
        <div className="flex items-center justify-center h-[35rem] w-full">
          <FloatingDock
            items={dockItems}
            desktopClassName="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
            mobileClassName="fixed right-4 bottom-4 translate-y-0"
          />
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default FloatingHeader;
