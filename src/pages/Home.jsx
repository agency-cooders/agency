import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import React from "react";

const Home = () => {
  return (
    <>
      <main className="bg-primary-background">
        <Header />
      </main>
      <HeroSection />
    </>
  );
};

export default Home;
