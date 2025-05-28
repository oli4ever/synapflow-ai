// Footer.jsx
import React from "react";
import Section from "./Section";
import { socials } from "../constants";
import {
  DiscordIcon,
  XIcon,
  InstagramIcon,
  TelegramIcon,
  FacebookIcon,
} from "./SocialIcons";

const Footer = () => {
  // Map for social media icons
  const getSocialIcon = (id) => {
    switch (id) {
      case "0":
        return <DiscordIcon className="w-6 h-6 fill-current" />;
      case "1":
        return <XIcon className="w-6 h-6 fill-current" />;
      case "2":
        return <InstagramIcon className="w-6 h-6 fill-current" />;
      case "3":
        return <TelegramIcon className="w-6 h-6 fill-current" />;
      case "4":
        return <FacebookIcon className="w-6 h-6 fill-current" />;
      default:
        return null;
    }
  };

  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption font-medium text-dark-400 lg:block">
          © SynapFlow AI {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="text-primary-300 hover:text-dark-300 transition-all duration-300 hover:scale-110"
            >
              {getSocialIcon(item.id)}
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
