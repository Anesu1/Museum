import React from "react";
import styled from "styled-components";

const LeftDiv = styled.div`
  background: ${(props) => props.color};
  width: 50px;
  position: absolute;
  left: -22px;
  height: 100%;
  top: 0;
  .img {
    background: url("./images/pattern.png");
    width: 100%;
    background-repeat: repeat-y;
    height: 100%;
    background-size: contain;
  }
`;

function Pattern({ bgColor }) {
  return (
    <LeftDiv color={bgColor} className="pattern">
      <div className="img"></div>
      {/* <img src="./images/pattern.png" alt="" /> */}
    </LeftDiv>
  );
}

export default Pattern;
