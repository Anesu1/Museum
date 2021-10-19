import React from "react";
import Banner from "../components/Banner";
import Background from "../components/Home/Background";
import Intro from "../components/Home/Intro";
import Title from "../components/Title";
import Location from "../components/Home/Location";
import VideoSection from "../components/Home/VideoSection";
import Exhibition from "../components/Home/Exhibition";
import Contact from "../components/Home/Contact";

function Home() {
  return (
    <>
      <Title />
      <Banner
        bgImageTwo="./images/item2.jpeg"
        bgImageOne="./images/item1.jpeg"
      />
      <Intro />
      <Background />
      <Location />
      <VideoSection />
      <Exhibition />
      <Contact />
    </>
  );
}

export default Home;
