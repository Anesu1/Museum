import React from "react";
import styled from "styled-components";

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
  h3 {
    font-family: ${(props) => props.theme.fam.afri};
    font-size: 18px;
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
  p {
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
  return (
    <TitleWrapper>
      <h3>
        “ I am not African because I was born in Africa, but because Africa was
        born in me “
      </h3>
      <p>Kwame Nkrumah</p>
      <div className="gold"></div>
    </TitleWrapper>
  );
}

export default Title;
