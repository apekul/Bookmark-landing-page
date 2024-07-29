import React from "react";

// Components
import Hero from "./Hero";
import Features from "./Features";
import Download from "./Download";
import Questions from "./Questions";
import Contact from "./Contact";

function Homepage() {
  return (
    <div className="paddingX flex-1 flex flex-col justify-between">
      <Hero />
      <Features />
      <Download />
      <Questions />
      <Contact />
    </div>
  );
}

export default Homepage;
