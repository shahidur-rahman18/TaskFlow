import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import WhyChoose from "./WhyChoose/WhyChoose";

const Home = () => {
  return <div className="overflow-hidden ">
    <Hero />
    <About />
    <WhyChoose />
  </div>;
};

export default Home;
