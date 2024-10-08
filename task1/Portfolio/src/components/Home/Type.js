import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer",
          "MERN Stack Developer",
          "Software Engineer",
          "Open Source Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        typeSpeed: 80,
        startDelay: 500,
        loopDelay: 2000,
      }}
    />
  );
}

export default Type;
