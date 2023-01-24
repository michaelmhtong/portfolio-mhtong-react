import React from "react";

const Contact = () => {
  return (
    <div className="h-52 grid justify-center content-center space-y-2 theme-bg-green text-white text-lg md:text-xl md:h-64 lg:h-80 lg:space-y-3 lg:text-2xl">
      <p className="font-heading">A wide range of technology?</p>
      <a href="mailto:mickmhtong@gmail.com">
        <p className="font-oblique text-center underline">Contact me.</p>
      </a>
    </div>
  );
};

export default Contact;
