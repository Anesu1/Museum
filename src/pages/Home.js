import React from "react";
import Banner from "../components/Banner";
import Background from "../components/Home/Background";
import Intro from "../components/Home/Intro";
import Title from "../components/Title";
import Location from "../components/Home/Location";
import VideoSection from "../components/Home/VideoSection";
import Exhibition from "../components/Home/Exhibition";
import Contact from "../components/Home/Contact";
import { HOME_QUERY } from "../App";
import { useQuery } from "@apollo/client";

function Home() {
  const { data } = useQuery(HOME_QUERY);

  return (
    <>
      <Title />
      <Banner
        bgImageTwo={data.pages.edges[1].node.blocks[2].attributes.images[0].url}
        bgImageOne={data.pages.edges[1].node.blocks[2].attributes.images[1].url}
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
