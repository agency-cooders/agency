import {
  House,
  Cpu,
  Computer,
  Star,
  FileCode2,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";

export const navbarItems = ["Home", "Services", "Projects", "Reviews", "Blog"];

export const dockItems = [
  {
    title: "Home",
    icon: <House className="h-full w-full hover:text-primary" />,
    href: "#",
  },
  {
    title: "Services",
    icon: <Cpu className="h-full w-full hover:text-primary" />,
    href: "#",
  },
  {
    title: "Projects",
    icon: <Computer className="h-full w-full hover:text-primary" />,
    href: "#",
  },
  {
    title: "Reviews",
    icon: <Star className="h-full w-full hover:text-primary" />,
    href: "#",
  },
  {
    title: "Blog",
    icon: <FileCode2 className="h-full w-full hover:text-primary" />,
    href: "#",
  },
  {
    title: "GitHub",
    icon: <Github className="h-full w-full hover:text-primary" />,
    href: "https://github.com/",
  },
  {
    title: "LinkedIn",
    icon: <Linkedin className="h-full w-full hover:text-primary" />,
    href: "https://www.linkedin.com/",
  },
  {
    title: "Gmail",
    icon: <Mail className="h-full w-full hover:text-primary" />,
    href: "mailto:your-email@gmail.com",
  },
  {
    title: "Twitter",
    icon: <Twitter className="h-full w-full hover:text-primary" />,
    href: "https://twitter.com/",
  },
];
