import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import Pattern from "../../styled/Pattern";
import { HOME_QUERY } from "../../App";
import {useQuery} from '@apollo/client';

const IntroWrapper = styled.section`
  position: relative;
  padding: 5%;
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
  }
  .intro-inner {
    padding-left: 10%;
    margin-bottom: 40px;
    @media (min-width: 768px) {
      padding-left: 20px;
    }
    @media (min-width: 992px) {
      width: 45%;
    }
    h2 {
      @media (min-width: 992px) {
        font-size: 26px;
      }
    }
  }
  .item1 {
    h2 {
      img {
        width: 145px;
        height: 7px;
        @media (min-width: 992px) {
          width: 185px;
        }
      }
    }
  }
  .item2 {
    @media (min-width: 768px) {
      margin-bottom: 0px;
    }
    h2 {
      img {
        max-width: 410px;
        height: 7px;
        @media (min-width: 992px) {
          max-width: 560px;
        }
      }
    }
  }
`;

function Intro() {
 const { data } = useQuery(HOME_QUERY);
 

  return (
    <IntroWrapper>
      <Pattern bgColor="#DB2A27" />
      <div className="intro-inner item1">
        <Heading text={data.pages.edges[1].node.blocks[5].innerBlocks[0].innerBlocks[0].attributes.content} />
        <Paragraph>
        {data.pages.edges[1].node.blocks[5].innerBlocks[0].innerBlocks[1].attributes.content} 
        </Paragraph>
      </div>
      <div className="intro-inner item2">
        <Heading text={data.pages.edges[1].node.blocks[5].innerBlocks[1].innerBlocks[0].attributes.content}  />
        <Paragraph>
        {data.pages.edges[1].node.blocks[5].innerBlocks[1].innerBlocks[1].attributes.content} 
        </Paragraph>
      </div>
    </IntroWrapper>
  );
}

export default Intro;
