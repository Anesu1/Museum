/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import TimeLineItem from "../styled/TimeLineItem";
import Pattern from "../styled/Pattern";
import { HOME_QUERY } from "../App";
import {useQuery} from '@apollo/client';

const TimeLineWrapper = styled.section`
  position: relative;
  padding: 5%;
  .pattern {
    height: 25%;
    &:nth-child(2) {
      top: 25%;
    }
    &:nth-child(3) {
      top: 50%;
    }
    &:nth-child(4) {
      top: 75%;
    }
  }
  h2 {
    font-family: ${(props) => props.theme.fam.calibre};
    font-style: normal;
    font-weight: bold;
    font-size: px;
    margin-left: 7%;
    letter-spacing: -0.02em;

    color: rgba(0, 0, 0, 0.05);
    @media (min-width: 768px) {
      font-size: 45px;
      line-height: 1.5px;
      margin-left: 0;
    }
    @media (min-width: 992px) {
      text-align: center;
    }
  }
  .timeline {
    padding: 50px 5% 0;
    margin-left: 7%;
    position: relative;
    @media (min-width: 768px) {
      margin-left: 0;
    }
    @media (min-width: 992px) {
      padding: 50px 0 0;
    }
    &:before {
      content: "";
      position: absolute;
      height: 100%;
      width: 2px;
      background: #000000;
      left: 5%;
      top: 0;
      @media (min-width: 992px) {
        left: 50%;
      }
    }
    &:after {
      content: "";
      position: absolute;
      background: #000;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      left: 5%;
      top: 0;
      transform: translateX(-50%);
      @media (min-width: 992px) {
        left: 50%;
      }
    }
    ul {
      &:after {
        content: "";
        position: absolute;
        background: #000;
        height: 15px;
        width: 15px;
        border-radius: 50%;
        left: 5%;
        bottom: 0;
        transform: translateX(-50%);
        @media (min-width: 992px) {
          left: 50%;
        }
      }
    }
  }
`;



const colors = [
  {
    color: "#F6B119",
  },
  {
    color: "#018A47",
  },
  {
    color: "#000000",
  },
  {
    color: "#DB2A27",
  },
];


function TimeLine() {
  const { data } = useQuery(HOME_QUERY);
  return (
    <TimeLineWrapper>
      {colors.map((item, i) => {
        return <Pattern bgColor={item.color} key={i} />;
      })}
      <h2>INSTAK DIGITAL STORY LINE IN PICTURES:</h2>
      <div className="timeline">
        <ul>
          <TimeLineItem featuredImage={data.pages.edges[0].node.blocks[4].innerBlocks[0].innerBlocks[0].innerBlocks[0].attributes.url} 
                        date={data.pages.edges[0].node.blocks[4].innerBlocks[0].innerBlocks[1].innerBlocks[0].attributes.content}
                        title={data.pages.edges[0].node.blocks[4].innerBlocks[0].innerBlocks[1].innerBlocks[1].attributes.content}
                        text={data.pages.edges[0].node.blocks[4].innerBlocks[0].innerBlocks[1].innerBlocks[2].attributes.content}
          />
          <TimeLineItem featuredImage={data.pages.edges[0].node.blocks[4].innerBlocks[1].innerBlocks[0].innerBlocks[0].attributes.url} 
                        date={data.pages.edges[0].node.blocks[4].innerBlocks[1].innerBlocks[1].innerBlocks[0].attributes.content}
                        title={data.pages.edges[0].node.blocks[4].innerBlocks[1].innerBlocks[1].innerBlocks[1].attributes.content}
                        text={data.pages.edges[0].node.blocks[4].innerBlocks[1].innerBlocks[1].innerBlocks[2].attributes.content}
          />
          <TimeLineItem featuredImage={data.pages.edges[0].node.blocks[4].innerBlocks[2].innerBlocks[0].innerBlocks[0].attributes.url} 
                        date={data.pages.edges[0].node.blocks[4].innerBlocks[2].innerBlocks[1].innerBlocks[0].attributes.content}
                        title={data.pages.edges[0].node.blocks[4].innerBlocks[2].innerBlocks[1].innerBlocks[1].attributes.content}
                        text={data.pages.edges[0].node.blocks[4].innerBlocks[2].innerBlocks[1].innerBlocks[2].attributes.content}
          />
          <TimeLineItem featuredImage={data.pages.edges[0].node.blocks[4].innerBlocks[3].innerBlocks[0].innerBlocks[0].attributes.url} 
                        date={data.pages.edges[0].node.blocks[4].innerBlocks[3].innerBlocks[1].innerBlocks[0].attributes.content}
                        title={data.pages.edges[0].node.blocks[4].innerBlocks[3].innerBlocks[1].innerBlocks[1].attributes.content}
                        text={data.pages.edges[0].node.blocks[4].innerBlocks[3].innerBlocks[1].innerBlocks[2].attributes.content}
          />
          {/* {data.pages.edges[0].node.blocks[4].innerBlocks.map((item, i) => {
            return (
              <TimeLineItem
                featuredImage={item.innerBlocks[0].innerBlocks[0].attributes.url}
                // title={item.innerBlocks[i].innerBlocks[1].attributes.content}
                // date={item.innerBlocks[i].innerBlocks[0].attributes.content }
                // text={item.innerBlocks[i].innerBlocks[2].attributes.content}
                key={i}
              />
            );
          })} */}
        </ul>
      </div>
    </TimeLineWrapper>
  );
}

export default TimeLine;
