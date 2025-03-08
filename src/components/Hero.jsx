import Image from "next/image";
import React from "react";
import HeroImage from "@/assets/images/hero.svg";
import ContentArea from "@/elements/ContentArea";

const Hero = () => {
  return (
    <div className="min-h-[550px] flex items-center justify-center text-white relative bg-primary-background font-medium">
      <div className="absolute top-0 inset-0 md:bg-[radial-gradient(circle,rgba(163,230,53,0.4)_0%,rgba(14,15,11,1)_25%)]"></div>
      <ContentArea>
        <div className="relative mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <div className="flex flex-col justify-center text-center md:text-left relative">
            <p className="uppercase text-sm text-primary tracking-widest font-medium">
              Modern Studio
            </p>
            <h1 className="text-4xl md:text-5xl leading-tight mt-2 font-medium">
              We're <span className="text-primary">help</span> <br /> To Build
              Your Dream Project
            </h1>
            <p className="mt-4 text-lg font-medium">
              Agency provides a full-service range including technical skills,
              design, and business understanding.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row md:justify-start justify-center items-center gap-4">
              <button className="border border-gray-500 px-6 py-3 rounded-lg font-semibold cursor-pointer">
                How We Work
              </button>
              <button className="border border-gray-500 px-6 py-3 rounded-lg font-semibold cursor-pointer">
                Contact Us
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={HeroImage}
              alt="hero-banner"
              height={600}
              width={600}
              className="w-full max-w-[350px]"
            />
          </div>
        </div>
      </ContentArea>
    </div>
  );
};

export default Hero;
