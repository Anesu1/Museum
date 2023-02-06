import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import Pattern from "../../styled/Pattern";
import { HOME_QUERY } from "../../App";
import {useQuery} from '@apollo/client';

const LocationWrapper = styled.section`
  position: relative;
  padding: 5%;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  .location-inner {
    padding-left: 10%;
    @media (min-width: 768px) {
      padding-left: 20px;
      width: 300%;
    }
    @media (min-width: 992px) {
      width: 40%;
    }
    .location {
      width: 100%;
    }

    h2 {
      @media (min-width: 768px) {
        font-size: 26px;
      }
      img {
        height: 7px;
        width: 185px;
        @media (min-width: 768px) {
          width: 230px;
        }
      }
    }
  }
  .text {
    @media (min-width: 992px) {
      width: 50%;
      margin-top: 60px;
    }
  }
  .location-imgs {
    margin-left: 10%;
    @media (min-width: 768px) {
      position: absolute;
      height: 200px;
      overflow: hidden;
      display: flex;
      z-index: 5;
      width: 600px;
      top: 60%;
    }
    @media (min-width: 992px) {
      right: 20%;
      top: 57%;
    }
    @media (min-width: 1200px) {
      height: 230px;
    }

    .img {
      border: 3px solid #fff;
      &:first-child {
        width: 100%;
        img {
          width: 100%;
          @media (min-width: 768px) {
            transform: scale(1.6);
          }
        }
        @media (min-width: 768px) {
          width: 190%;
          overflow: hidden;
        }
      }
      &:last-child {
        width: 100%;
        overflow: hidden;
        height: 300px;
        img {
          width: 100%;
        }
      }
    }
  }
`;

function Location() {
  const { data } = useQuery(HOME_QUERY);



  return (
    <LocationWrapper>
      <Pattern bgColor="#F6B119" />

      <div className="location-inner">
        <img className="location" src={data.pages.edges[1].node.blocks[8].innerBlocks[0].innerBlocks[0].attributes.url} alt="" />
      </div>
      <div className="location-inner text">
        <Heading text={data.pages.edges[1].node.blocks[8].innerBlocks[1].innerBlocks[0].attributes.content} />
        <Paragraph>
          {data.pages.edges[1].node.blocks[8].innerBlocks[1].innerBlocks[1].attributes.content}
        </Paragraph>
      </div>
      <div className="location-imgs">
        <div className="img">
          <img src={data.pages.edges[1].node.blocks[8].innerBlocks[0].innerBlocks[1].attributes.images[0].url} alt="" />
        </div>
        <div className="img">
          <img src={data.pages.edges[1].node.blocks[8].innerBlocks[0].innerBlocks[1].attributes.images[1].url} alt="" />
        </div>
      </div>
    </LocationWrapper>
  );
}

export default Location;
