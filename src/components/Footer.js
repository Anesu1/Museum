/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import Pattern from "../styled/Pattern";
import { HOME_QUERY } from "../App";
import {useQuery} from '@apollo/client';

const FooterWrapper = styled.footer`
  position: relative;
  background: #000;
  padding: 5%;
  padding-top:15%;
  @media(min-width:768px){
    padding-top:5%;
  }
  .footer-inner {
    color: #fff;
    margin-left: 30px;
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
    }
    img {
      width: 80%;
      margin: 0 auto;
      margin-left:8%;
      @media (min-width: 768px) {
        object-fit: contain;
        margin-left:0;
      }
    }
    .logo {
      @media (min-width: 768px) {
        width: 25%;
      }
    }
    .africa {
      @media (min-width: 768px) {
        width: 35%;
      }
    }
    a {
      text-decoration: none;
      text-align: center;
      display: block;
      padding: 10px;
      color: #fff;
      transition: 0.7s;
      @media (min-width: 768px) {
        text-align: left;
        padding-left: 0;
        padding-bottom: 5px;
        font-size: 22px;
      }
      &:hover {
        color: #db2a27;
      }
    }

    p {
      text-align: center;
      font-size: 14px;
      margin: 10px auto;
      width: max-content;
      line-height: 38px;
      @media (min-width: 768px) {
        width: unset;
        font-size: 22px;
        text-align: left;
      }
      br {
        display: none;
        @media (min-width: 768px) {
          display: block;
        }
      }
      a {
        display: unset;
      }
    }
  }
`;

function Footer() {
  const { data } = useQuery(HOME_QUERY);
  return (
    <FooterWrapper>
      <Pattern bgColor="#000" />
      <div className="footer-inner">
        <img src={data.pages.edges[1].node.blocks[0].attributes.url} className="logo" alt="" />
        <img src={data.pages.edges[1].node.blocks[20].attributes.url} alt="" className="africa" />
        <div className="text">
          <a href="#">{data.pages.edges[1].node.blocks[23].attributes.content}</a>
          <a href="#">{data.pages.edges[1].node.blocks[21].attributes.content}</a>
          <p>
            {data.pages.edges[1].node.blocks[22].attributes.content} <br />
            <a href="#">EvokeZW </a>&<a href="https://www.facebook.com/revixions"> Revixions</a>
          </p>
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
