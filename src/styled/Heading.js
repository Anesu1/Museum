import React from "react";
import styled from "styled-components";

const HeadingWrapper = styled.h2`
  font-family: ${(props) => props.theme.fam.afri};
  font-size: 20px;

  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  line-height: 25px;
  @media (min-width: 1200px) {
    width: max-content;
  }
  img {
    margin-top: 10px;
    width: 100%;
  }
`;

function Heading({ text }) {
  return (
    <HeadingWrapper>
      {text}
      <img src="./images/group.png" alt="" />
    </HeadingWrapper>
  );
}

export default Heading;
