import React, { useState } from "react";
import styled from "styled-components";
import { HiMenu } from "react-icons/hi";
import Menu from "../styled/Menu";
import { CgCloseO } from "react-icons/cg";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  background: ${(props) => props.theme.color.red};
  padding: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 992px) {
    padding: 20px;
  }
  .logo {
      z-index:991;
    img {
      width: 150px;
      @media (min-width: 992px) {
        width: 250px;
      }
    }
  }
  .hamburger {
    margin-left: auto;
    position: relative;
    z-index: 991;
    display: flex;
    justify-content: space-between;
    font-family: ${(props) => props.theme.fam.alegreya};
    color: #fff;
    text-transform: uppercase;
    align-items: center;
    @media (min-width: 992px) {
      display: none;
    }
    svg {
      color: #fff;
      margin-left: 5px;
      height: 30px;
      width: 30px;
      transition: 0.7s;
    }
  }
  .last {
    margin-top: -10px;
  }
  .search {
    display: none;
    @media (min-width: 992px) {
      display: flex;
      color: #fff;
      align-items: center;
      margin-left: auto;
      width: max-content;
      margin-bottom: 5px;
      p {
        margin: 0;
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }
  .buttons {
    display: none;
    @media (min-width: 992px) {
      display: block;
    }
    button {
      border: none;
      color: #fff;
      font-size: 10px;
      height: 25px;
      padding: 0 10px;
      &:first-child {
        background: #9b0f0c;
        width: 100px;
      }
      &:last-child {
        background: transparent;
      }
    }
  }
`;

function Header() {
  const [open, setOpen] = useState(false);
  window.onscroll = () =>{
      setOpen(false)
  } 
  return (
    <HeaderWrapper>
      <Link to="/" className="logo">
        <img src="./images/logo.png" alt="" />
      </Link>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        Menu {open ? <CgCloseO /> : <HiMenu />}
      </div>
      <Menu open={open} setOpen={setOpen}/>
    </HeaderWrapper>
  );
}

export default Header;
