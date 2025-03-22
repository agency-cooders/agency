import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import Ribbon from "@/components/Ribbon";
import React from "react";

const Home = () => {
  return (
    <>
      <main className="bg-primary-background">
        <Header />
        <HeroSection />
        <Ribbon />
      </main>
    </>
  );
};

export default Home;
