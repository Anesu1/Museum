/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../components/Banner";
import Background from "../components/Home/Background";
import Intro from "../components/Home/Intro";
import Title from "../components/Title";
import VideoSection from "../components/Home/VideoSection";
import Exhibition from "../components/Home/Exhibition";
import Contact from "../components/Home/Contact";
import TimeLine from "../components/TimeLine";
import {HOME_QUERY} from '../App';
import {useQuery} from '@apollo/client'


function About() {
  const {data} = useQuery(HOME_QUERY);

  return (
    <>
      <Title />
      <Banner
        bgImageTwo={data.pages.edges[0].node.blocks[0].attributes.images[0].url}
        bgImageOne={data.pages.edges[0].node.blocks[0].attributes.images[1].url}
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
