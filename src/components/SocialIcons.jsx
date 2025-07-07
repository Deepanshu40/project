import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const SocialIcons = ({iconSize='text-xl'}) => {
  return (
    <div className="flex gap-6">
      <a
        className={`text-white ${iconSize} opacity-75 hover:opacity-100 hover:scale-110`}
        href="#"
      >
        <FaInstagram />
      </a>
      <a
        className={`text-white ${iconSize} opacity-75 hover:opacity-100 hover:scale-110`}
        href="#"
      >
        <FaFacebook />
      </a>
      <a
        className={`text-white ${iconSize} opacity-75 hover:opacity-100 hover:scale-110`}
        href="#"
      >
        <FaTwitter />
      </a>
    </div>
  );
};

export default SocialIcons;
