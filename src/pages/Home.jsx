import DemoHero from "@/components/DemoHero";
import FloatingHeader from "@/components/FloatingHeader";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Services";
import TopLoader from "@/components/TopLoader";
import ClickSpark from "@/components/ui/click-spark";
import { Globe } from "@/components/ui/globe";
import React from "react";

const Home = () => {
  return (
    <main className="bg-primary-background pb-1">
      <TopLoader />
      <Header />
      <ClickSpark sparkColor="#9eff00">
        {/* <FloatingHeader /> */}
        <DemoHero />
        <Services />
        <Footer />
      </ClickSpark>
    </main>
  );
};

export default Home;
