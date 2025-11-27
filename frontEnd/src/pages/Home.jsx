import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AiTools from "../components/AiTools";
import Tesimonials from "../components/Tesimonials";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AiTools />
      <Tesimonials />
      <Pricing />
      <Footer />
    </>
  );
};

export default Home;
