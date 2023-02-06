import React from "react";
import styled from "styled-components";
import { HOME_QUERY } from "../App";
import { useQuery } from "@apollo/client";

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
  const {data} = useQuery(HOME_QUERY)
  return (
    <HeadingWrapper>
      {text}
      <img src={data.pages.edges[1].node.blocks[24].attributes.url} alt="" />
    </HeadingWrapper>
  );
}

export default Heading;
