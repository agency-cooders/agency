import React from "react";
import { Globe } from "./ui/globe";
import ContentArea from "@/elements/ContentArea";

const DemoHero = () => {
  return (
    <ContentArea>
      <section className="flex justify-between">
        <div className="p-16 text-[70px] leading-20 font-bold"></div>
        <Globe />
      </section>
    </ContentArea>
  );
};

export default DemoHero;
