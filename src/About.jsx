import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { globalContext } from "./contextApi";

const About = () => {
  const { udpateAboutPage } = globalContext();

  useEffect(() => udpateAboutPage(), []);

  return <HeroSection />;
};

export default About;