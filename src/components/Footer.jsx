import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import React from "react";
const socialLinks = [
  { href: "https://github.com/Tresorbana", icon: <FaGithub /> },
  { href: "https://linkedin.com", icon: <FaLinkedin /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "mailto:tresorbana77@gmail.com", icon: <FaEnvelope /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          © 2025 Bana Emmy Tresor. Built with passion for impact.
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Get In Touch
        </a>
      </div>
    </footer>
  );
};

export default Footer;
