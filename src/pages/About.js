import React from "react";
import Banner from "../components/Banner";
import Background from "../components/Home/Background";
import Intro from "../components/Home/Intro";
import Title from "../components/Title";
import VideoSection from "../components/Home/VideoSection";
import Exhibition from "../components/Home/Exhibition";
import Contact from "../components/Home/Contact";
import TimeLine from "../components/TimeLine";

function About() {
  return (
    <>
      <Title />
      <Banner
        bgImageTwo="./images/item2.jpeg"
        bgImageOne="./images/aboutBG.png"
      />
      <Intro />
      <Background />
      <TimeLine />
      <VideoSection />
      <Exhibition />
      <Contact />
    </>
  );
}

export default About;
