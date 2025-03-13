import ContentArea from "@/elements/ContentArea";
import React from "react";

const Footer = () => {
  return (
    <section className="border-t-1 border-t-overlay">
      <ContentArea>
        <footer className="flex items-center justify-between text-primary pt-10 font-semibold">
          <p>cooders</p>
          <p>Copyright</p>
        </footer>
      </ContentArea>
    </section>
  );
};

export default Footer;
