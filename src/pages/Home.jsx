import FloatingHeader from "@/components/FloatingHeader";
import Header from "@/components/Header";
import Services from "@/components/Services";
import TopLoader from "@/components/TopLoader";
import React from "react";

const Home = () => {
  return (
    <main className="bg-primary-background pb-20">
      <TopLoader />
      <Header />
      <FloatingHeader />
      <Services />
    </main>
  );
};

export default Home;
