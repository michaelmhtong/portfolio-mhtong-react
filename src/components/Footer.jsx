import React from "react";

const Footer = () => {
  const NavLogo = "/assets/logo.svg";
  return (
    <div className="px-14 py-6 bg-silver">
      <div className="pb-2">
        <img src={NavLogo} alt="/" className="w-10 h-10 fill-blue-500 cursor-pointer" />
      </div>
      <p className="text-xs font-body">
        <div>© 2023 Michael Tong</div>
        <div>Built with React, Tailwind CSS and Framer Motion</div>
      </p>
    </div>
  );
};

export default Footer;
