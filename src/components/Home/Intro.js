import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import Pattern from "../../styled/Pattern";

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
  return (
    <IntroWrapper>
      <Pattern bgColor="#DB2A27" />
      <div className="intro-inner item1">
        <Heading text="Introduction" />
        <Paragraph>
          The Museum of African Liberation is one of the most ambitious projects
          by the emerging pan-African think tank - Institute of African
          Knowledge (INSTAK). Other great projects by INSTAK are The Africa
          Factbook in association with the African Union Commission and the
          sister publication Book of African Records.
        </Paragraph>
      </div>
      <div className="intro-inner item2">
        <Heading text="ABOUT THE MUSEUM OF AFRICAN LIBERATION" />
        <Paragraph>
          The establishment of the Museum of African Liberation is a priority
          project and the support of the Government of Zimbabwe, the host
          country, is a crucial first step. Following the signing of a
          Memorandum of Understanding (MOU) between the Government of Zimbabwe
          and INSTAK, the next concrete step towards the realization of the
          Museum project was the allocation and identification of a suitable
          site, a 100-hectare piece ofland, which His Excellency President
          Mnangagwa commissioned for this purpose at a ground breaking ceremony
          on 4th December 2020.
        </Paragraph>
      </div>
    </IntroWrapper>
  );
}

export default Intro;
