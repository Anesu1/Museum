/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import TimeLineItem from "../styled/TimeLineItem";
import Pattern from "../styled/Pattern";

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

const items = [
  {
    featuredImage: "./images/content1.png",
    title: "THE MUSEUM OF AFRICAN LIBERATION GROUND BREAKING CEREMONY",
    date: "2019",
    text: "His Excellency the President of the Republic of Zimbabwe Cde. Dr. Emmerson D. Mnangagwa energetically pounds the ground in a symbolic and historical gesture during the ground breaking ceremony at the Museum of African Liberation site in Warren Park, Harare on 3 December 2020. Looking on are the Minister of Home Affairs and Cultural Heritage Cde Kazembe Kazembe, INSTAK CEO Ambassador Kwame Muzawazi and INSTAK Board Chairperson Ambassador Prof. Simbi Mubako.",
  },
  {
    featuredImage: "./images/content2.png",
    title: "THE AFRICA FACTBOOK LAUNCH",
    date: "2020",
    text: "His Excellency the President of the Republic of Zimbabwe Cde. Dr. Emmerson D. Mnangagwa proudly displays a copy of The Africa Factbook he personally signed as an authentic and factual publication which demystifies some inaccurate narratives whichhad been peddled about Africa. Watching on are (from L to R) INSTAK CEO Amb. Kwame Muzawazi, INSTAK Board Chairperson Amb. Prof. Simbi Mubako and the African Union Chairperson and South African President, His Excellency Cyril Ramaphosa’s representative, the then South African Ambassador to Zimbabwe, His Excellency Mphakama Mbete. The Africa Factbook launch took place in Harare on the 9th of September 2020.",
  },
  {
    featuredImage: "./images/content3.png",
    title:
      "SOLIDARITY TREE PLANTING AND RUSSIA FEDERATION NATIONAL FLAG RAISING DAY",
    date: "2021",
    text: "The Ambassador of the Russian Federation Ambassador to Zimbabwe, Nikolai Krasilnikov plants a Mukumba tree at the Museum of African Liberation site in Warren Park, Harare. This was a symbolic gesture of solidarity between the Russian federation and the Museum of African Liberation. During the same event, on the 18th of February 2021, the Russian Diplomat also raised the Russian Federation flag to seal the relationship between the museum project and Russia. Looking on are the Cuban Ambassador to Zimbabwe Mrs Carmelina Ramirez Rodriguez and INSTAK CEO Amb. Kwame Muzawazi.",
  },
  {
    featuredImage: "./images/content4.png",
    title: "CUBAN SOLIDARITY TREE PLANTING",
    date: "2022",
    text: "The Cuban Ambassador to Zimbabwe Mrs Carmelina Ramirez Rodriguez waters the Mukumba tree she had just planted at the Museum of African Liberation site under watchful eyes of the Russian Federation ambassador to Zimbabwe, Nikolai Krasilnikov and INSTAK CEO Amb. Kwame Muzawazi on 18 February 2021. She also took the opportunity to raise the Cuban national flag at the site symbolising Cuban support to the Museum of African Liberation.",
  },
];

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
  return (
    <TimeLineWrapper>
      {colors.map((item, i) => {
        return <Pattern bgColor={item.color} key={i} />;
      })}
      <h2>INSTAK DIGITAL STORY LINE IN PICTURES:</h2>
      <div className="timeline">
        <ul>
          {items.map((item, i) => {
            return (
              <TimeLineItem
                featuredImage={item.featuredImage}
                title={item.title}
                date={item.date}
                text={item.text}
                key={i}
              />
            );
          })}
        </ul>
      </div>
    </TimeLineWrapper>
  );
}

export default TimeLine;
