import FloatingHeader from "@/components/FloatingHeader";
import Header from "@/components/Header";
import React from "react";

const Home = () => {
  return (
    <main className="bg-primary-background h-[1400px]">
      <Header />
      <FloatingHeader />
    </main>
  );
};

export default Home;
