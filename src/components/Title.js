import React from "react";
import styled from "styled-components";
import { HOME_QUERY } from "../App";
import { useQuery } from "@apollo/client";

const TitleWrapper = styled.section`
  background: #000;
  color: #fff;
  padding: 5% 0;
  position: relative;
  @media (min-width: 768px) {
    padding: 2% 0;
  }
  @media (min-width: 992px) {
    padding: 15px 0;
  }
p {
    font-family: ${(props) => props.theme.fam.afri};
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    line-height: 36px;
    padding: 0 3%;
    margin: 1% auto;
    max-width: 500px;
    text-transform: uppercase;
    @media (min-width: 768px) {
      font-size: 23px;

      max-width: unset;
    }
    @media (min-width: 992px) {
      width: 62%;
      margin: 5px auto;
      padding: 0px 0;
    }
    @media (min-width: 1200px) {
      width: 50%;
      line-height: 25px;
      max-width: 550px;
    }
  }
  h5{
    font-family: ${(props) => props.theme.fam.alegreya};
    font-weight: 100;
    font-size: 15px;
    line-height: 26px;
    text-align: center;
    margin-top: 10px;

    padding: 0 5%;
    letter-spacing: -0.02em;
    text-decoration-line: underline;
    @media (min-width: 768px) {
      margin-top: 20px;
    }
    @media (min-width: 992px) {
      margin: 5px 0;
    }
  }
  .gold {
    position: absolute;
    bottom: 0;
    height: 12px;
    width: 100%;
    background: ${(props) => props.theme.color.gold};
    z-index: 2;
  }
`;

function Title() {
  const {data} = useQuery(HOME_QUERY)
  return (
    <TitleWrapper>
      <p>
    {data.pages.edges[1].node.blocks[3].attributes.content}
      </p>
      <h5>{data.pages.edges[1].node.blocks[4].attributes.content}</h5>
      <div className="gold"></div>
    </TitleWrapper>
  );
}

export default Title;
