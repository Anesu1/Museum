import React from "react";
import styled from "styled-components";
import Paragraph from "./Paragraph";

const ItemWrapper = styled.li`
  position: relative;
  width: 100%;
  @media (min-width: 992px) {
    justify-content: space-between;
  }
  &:before {
    content: "";
    position: absolute;
    background: #000;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    left: 0%;
    top: 0;
    transform: translateX(-50%);
    @media (min-width: 992px) {
      left: 50%;
    }
  }

  &:nth-child(odd) {
    display: flex;
    flex-direction: column-reverse;
    @media (min-width: 992px) {
      flex-direction: row;
    }
    .content {
      padding-left: 20px;
      @media (min-width: 992px) {
        padding-left: 5%;
      }
      span {
        margin-left: 90px;
        @media (min-width: 992px) {
          margin-left: 110px;
        }
        &:before {
          left: 0;
        }
      }
    }
    .img {
      @media (min-width: 992px) {
        width: 47%;
        padding-right: 5%;
      }
    }
  }
  &:nth-child(even) {
    display: flex;
    flex-direction: column-reverse;
    @media (min-width: 992px) {
      flex-direction: row-reverse;
    }
    .content {
      padding-left: 20px;
      @media (min-width: 992px) {
        padding-right: 5%;
      }
      h3 {
        @media (min-width: 992px) {
          width: 230px;
        }
      }
      span {
        margin-left: 90px;
        @media (min-width: 992px) {
          text-align: right;
          display: block;
          margin: 11px 110px 50px auto;
        }
        &:before {
          left: 0;
          @media (min-width: 992px) {
            left: unset;
            right: 0;
          }
        }
      }
    }
    .img {
      @media (min-width: 992px) {
        width: 47%;
        padding-left: 5%;
      }
    }
  }
  .content {
    position: relative;
    @media (min-width: 992px) {
      width: 48%;
    }
    span {
      font-family: ${(props) => props.theme.fam.calibre};
      font-weight: bold;
      font-size: 18px;
      line-height: 0px;
      letter-spacing: -0.02em;
      &:before {
        height: 2px;
        width: 100px;
        content: "";
        background: #000;
        position: absolute;
        top: 7px;
        @media (min-width: 992px) {
          width: 150px;
        }
      }
    }
    h3 {
      font-family: ${(props) => props.theme.fam.calibre};
      @media (min-width: 992px) {
        font-weight: bold;
        font-size: 25px;
        letter-spacing: -0.02em;
        margin-top: 50px;
      }
    }
    p {
      font-family: ${(props) => props.theme.fam.unica};
    }
    /* a {
      font-family: ${(props) => props.theme.fam.unica};
      font-style: normal;
      font-weight: 800;
      font-size: 15px;
      position: relative;
      line-height: 24px;
      text-decoration: none;
      color: #000000;
      padding-bottom: 5px;
      letter-spacing: -0.02em;
      &:before {
        content: "";
        position: absolute;
        background: #000;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
      }
      img {
        margin-left: 5px;
        width: 40px;
      }
    } */
  }
  .img {
    width: 100%;
    margin-top: 30px;
    margin: 30px 0 50px 20px;

    img {
      width: 100%;
    }
  }
`;

function TimeLineItem({ featuredImage, title, date,  text }) {
  return (
    <ItemWrapper>
      <div className="img">
        <img src={featuredImage} alt="" />
      </div>
      <div className="content">
        <span>{date}</span>
        <h3>{title}</h3>
        <Paragraph>{text}</Paragraph>
        {/* <Link to={link}>
          Read More <img src="./images/right.png" alt="" />
        </Link> */}
      </div>
    </ItemWrapper>
  );
}

export default TimeLineItem;
