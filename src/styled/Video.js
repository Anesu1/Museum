import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

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
  return (
    <VideoWrapper>
      <ReactPlayer
        width="100%"
        height="100%"
        url="https://www.youtube.com/watch?v=TKjyQeFiLqI"
        controls
      />
    </VideoWrapper>
  );
}

export default Video;
