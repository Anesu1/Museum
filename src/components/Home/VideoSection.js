import React from "react";
import Video from "../../styled/Video";
import Pattern from "../../styled/Pattern";
import styled from "styled-components";

const Vid = styled.section`
  position: relative;
`;

function VideoSection() {
  return (
    <Vid>
      <Pattern bgColor="#018A47" />
      <Video />
    </Vid>
  );
}

export default VideoSection;
