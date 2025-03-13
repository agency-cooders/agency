import FloatingHeader from "@/components/FloatingHeader";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Services";
import TopLoader from "@/components/TopLoader";
import ClickSpark from "@/elements/ClickSpark";
import React from "react";

const Home = () => {
  return (
    <main className="bg-primary-background pb-[105px]">
      <TopLoader />
      <Header />
      <ClickSpark sparkColor="#9eff00">
        {/* <FloatingHeader /> */}
        <Services />
        <Footer />
      </ClickSpark>
    </main>
  );
};

export default Home;
