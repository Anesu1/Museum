import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import Pattern from "../../styled/Pattern";

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
  return (
    <LocationWrapper>
      <Pattern bgColor="#F6B119" />

      <div className="location-inner">
        <img className="location" src="./images/home/location.jpeg" alt="" />
      </div>
      <div className="location-inner text">
        <Heading text="MUSEUM LOCATION" />
        <Paragraph>
          The Museum of African Liberation is being constructed in Harare
          Zimbabwe but aspires to house material from all African countries
          which waged armed struggle in order to liberate themselves but also
          includes countries that may not have taken up arms but were
          instrumental in the liberation period. The Museum of African
          Liberation will be a monument of the epic struggle to liberate the
          African people from colonialism and apartheid
        </Paragraph>
      </div>
      <div className="location-imgs">
        <div className="img">
          <img src="./images/home/location-left.jpeg" alt="" />
        </div>
        <div className="img">
          <img src="./images/home/location-right.jpeg" alt="" />
        </div>
      </div>
    </LocationWrapper>
  );
}

export default Location;
