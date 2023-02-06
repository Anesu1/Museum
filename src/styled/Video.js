import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { HOME_QUERY } from "../App";
import { useQuery } from "@apollo/client";

const VideoWrapper = styled.div`
  margin-left: 8%;
  height: 280px;

  @media (min-width: 768px) {
    height: 660px;
    margin-left: 1%;
  }
  .ytp-swatch-background-color {
    background: #f6b119 !important;
  }
`;

function Video() {
  const {data} = useQuery(HOME_QUERY)
  return (
    <VideoWrapper>
      <ReactPlayer
        width="100%"
        height="100%"
        url={data.pages.edges[1].node.blocks[9].attributes.url}
        controls
      />
    </VideoWrapper>
  );
}

export default Video;
