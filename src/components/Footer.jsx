import ContentArea from "@/elements/ContentArea";
import NavItem from "@/elements/NavItem";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import React from "react";

const Footer = () => {
  return (
    <section className="border-t-1 border-t-overlay">
      <ContentArea>
        <footer className="flex items-center justify-between py-6 font-semibold">
          <NavItem content="cooders" />
          <p>Made with ❤️ &copy; 2025 COODERS</p>
          <div className="flex items-center gap-3">
            <IconBrandGithub className="hover:text-primary cursor-pointer" />
            <IconBrandLinkedin className="hover:text-primary cursor-pointer" />
            <IconMail className="hover:text-primary cursor-pointer" />
            <IconPhone className="hover:text-primary cursor-pointer" />
          </div>
        </footer>
      </ContentArea>
    </section>
  );
};

export default Footer;
