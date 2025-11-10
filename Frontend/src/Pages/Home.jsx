import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import Background from "../Components/Background";
import Hero from "../Components/Hero";
import Product from "./Product";
import OurPolicy from "../Components/OurPolicy";
import Footer from "./Footer";

const Home = () => {
  const heroData = [
    { text1: "30% OFF Limited Offer", text2: "Style that" },
    {
      text1: "Discover the Best Of Bold Fashion",
      text2: "Limited Time Only!!",
    },
    { text1: "Explore Our best Collections", text2: "Shop Now!!" },
    { text1: "Choose Your Perfect Fashion Fit", text2: "Now On Sale " },
  ];
  const [heroCount, setHeroCount] = useState(0);
  useEffect(() => {
    const intrevel = setInterval(() => {
      setHeroCount((prevCount) => (prevCount === 3 ? 0 : prevCount + 1));
    }, 3000);
    return () => clearInterval(intrevel);
  }, []);
  return (
    <div className="overflow-x-hidden relative top-[70px] ">
      <div className="w-[100vw] lg:h-[100vh] md:h-[50vh] sm:-[30vh] bg-gradient-to-l from-[#141414] to-[#0c2025]">
        <Background heroCount={heroCount} />
        <Hero
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          heroData={heroData[heroCount]}
        />
      </div>
      <Product />
      <OurPolicy />
      <Footer />
    </div>
  );
};

export default Home;
