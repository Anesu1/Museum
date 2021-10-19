import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const BannerWrapper = styled.section`
  overflow-x: hidden;
  .banner-item {
    height: 60vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 768px) {
      height: 500px;
    }
    @media (min-width: 1200px) {
      height: 80vh;
    }
    h1 {
      font-family: ${(props) => props.theme.fam.alegreya};
      font-style: normal;
      font-weight: 800;
      font-size: 40px;
      position: relative;
      left: 50%;
      top: 50%;
      margin: 0;
      transform: translate(-50%, -50%);
      padding: 5%;
      line-height: 45px;
      text-align: center;
      max-width: 1000px;

      color: #fff;
      letter-spacing: -0.02em;
      @media (min-width: 768px) {
        font-size: 80px;
        line-height: 115px;
      }
    }
   
  }
  .slick-prev,
  .slick-next {
    font-size: 50px;
    color: #ffffff81;
    height: 30px;
    width: 30px;
    @media (min-width: 768px) {
      height: 70px;
      width: 70px;
    }
  }
  .slick-next {
    left: unset;
    right: 0px;
    @media (min-width: 768px) {
      right: 20px;
    }
  }
  .slick-prev {
    left: 0px;
    display: block;
    z-index: 99;
    @media (min-width: 768px) {
      left: 20px;
    }
  }
  .item1 {
    background: linear-gradient(to bottom, #00000053, #00000053),
      url("${(props) => props.bgImageOne}");
    background-size: cover;
  }
  .item2 {
    background: linear-gradient(to bottom, #00000053, #00000053),
      url("${(props) => props.bgImageTwo}");
    background-size: cover;
  }
`;

function Banner({ bgImageOne, bgImageTwo}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <BsChevronLeft />,
    nextArrow: <BsChevronRight />,
  };

  return (
    <BannerWrapper bgImageOne={bgImageOne} bgImageTwo={bgImageTwo}>
      <Slider {...settings}>
        <div className="banner-item item1">
          <h1>
            Welcome to the <br /> Museum of African Liberation
          </h1>
        </div>
        <div className="banner-item item2">
          <h1>
            Welcome to the <br /> Museum of African Liberation
          </h1>
          
        </div>
      </Slider>
    </BannerWrapper>
  );
}

export default Banner;
