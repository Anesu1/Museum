import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import Pattern from "../../styled/Pattern";
import { HOME_QUERY } from "../../App";
import {useQuery} from '@apollo/client';

const BackgroundWrapper = styled.section`
  position: relative;
  background: #000;
  padding: 5%;
  @media (min-width: 992px) {
    display: flex;
    padding: 0;
  }
  .bg-inner {
    padding-left: 10%;
    margin-bottom: 40px;
    @media (min-width: 768px) {
      padding-left: 20px;
    }
    @media (min-width: 992px) {
      width: 45%;
      margin-bottom: 0;
      margin: auto;

      padding: 20px 20px 20px 75px;
    }
    a {
      color: #fff;
    }
  }
  .bg-slide {
    @media (min-width: 992px) {
      width: 55%;
      padding: 0;
    }
  }
  h2 {
    color: #fff;
    @media (min-width: 768px) {
      font-size: 26px;
    }
    img {
      width: 205px;
      height: 7px;
      @media (min-width: 768px) {
        width: 250px;
      }
    }
  }
  p {
    color: #fff;
  }
  .bg-image {
    height: 200px;
    width: 100%;
    @media (min-width: 768px) {
      height: 400px;
    }
    @media (min-width: 992px) {
      height: 470px;
    }
  }
  .item1 {
    background: linear-gradient(to bottom, #00000053, #00000053),
      url("${props => props.item1}");
    background-size: cover;
  }
  .item2 {
    background: linear-gradient(to bottom, #00000053, #00000053),
      url("${props => props.item2}");
    background-size: cover;
  }
`;

const NextButton = styled.button`
  background: #000;
  transition: 0.7s;
  height: 50px;
  width: 80px;
  color: #fff;
  border: unset;
  right: 50%;
  display: block;
  top: unset;
  transform: translateX(100%);
  bottom: 0;
  &:before {
    content: "NEXT";
    font-family: ${(props) => props.theme.fam.alegreya};
    text-transform: uppercase;
    font-size: 15px;
  }
  &:hover {
    background: #fff;
    &:before {
      color: #000;
    }
  }
`;
const PrevButton = styled.button`
  background: #000 !important;
  transition: 0.7s;
  height: 50px;
  width: 80px;
  color: #fff;
  z-index: 9;
  left: 50%;
  border: unset;
  display: block;
  top: unset;
  transform: translateX(-100%);
  bottom: 0;
  &:before {
    content: "PREV";
    font-family: ${(props) => props.theme.fam.alegreya};
    text-transform: uppercase;
    font-size: 15px;
  }
  &:hover {
    background: #fff !important;
    &:before {
      color: #000;
    }
  }
`;

function Background() {
  const { data } = useQuery(HOME_QUERY);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
  };
  return (
    <BackgroundWrapper item1={data.pages.edges[1].node.blocks[6].innerBlocks[1].innerBlocks[0].attributes.images[0].url} item2={data.pages.edges[1].node.blocks[6].innerBlocks[1].innerBlocks[0].attributes.images[1].url}>
      <Pattern bgColor="#000" />
      <div className="bg-inner">
        <Heading text={data.pages.edges[1].node.blocks[6].innerBlocks[0].innerBlocks[0].attributes.content} />
        <Paragraph>
        {data.pages.edges[1].node.blocks[6].innerBlocks[0].innerBlocks[1].attributes.content}
        </Paragraph>
        <Link to="/">Find out more</Link>
      </div>
      <div className="bg-inner bg-slide">
        <Slider {...settings}>
          <div className="bg-image item1" ></div>
          <div className="bg-image item2" ></div>
        </Slider>
      </div>
    </BackgroundWrapper>
  );
}

export default Background;
