import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuWrapper = styled.div`
  @media (min-width: 992px) {
    flex: 1;
  }
  ul {
    position: absolute;
    background: ${(props) => props.theme.color.red};
    max-width: 0;
    overflow: hidden;
    right: 0;
    width: 100%;
    top: 0;
    transition: 0.7s;
    height: 100vh;
    z-index: 990;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (min-width: 992px) {
      max-width: unset;
      height: 100%;
      position: relative;
      flex-direction: row;
      background: transparent;
      align-items: center;
      flex: 1;
      margin-right: auto;
      width:max-content;
    }
    @media (min-width: 1200px) {
      justify-content: flex-start;
      padding-left: 90px;
    }
    li {
      width: max-content;
      &:nth-child(3) {
        a {
          &:before {
            width: 70%;
          }
          &:after {
            width: 70%;
          }
        }
      }
      a {
        text-decoration: none;
        color: #fff;
        display: block;
        padding: 20px;
        @media (min-width: 992px) {
          padding: 20px 15px;
          padding-bottom: 20px;
          position: relative;
          font-size: 13px;
        }
        &:after,
        &:before {
          transition: 0.7s;
        }
      }
      @media (min-width: 992px) {
        .active {
          &:after {
            background: #fff;
            width: 60%;
            height: 2px;
            content: "";
            position: absolute;
            bottom: 15px;
            left: 15px;
            transition: 0.7s;
          }
          &:before {
            background: #fff;
            width: 60%;
            height: 2px;
            transition: 0.7s;
            content: "";
            position: absolute;
            bottom: 11px;
            left: 15px;
          }
        }
      }
      &:last-child, &:nth-child(4),&:nth-child(3){
        
        pointer-events: none;
      }
    }

   
  }
  .open {
    max-width: 900px;
  }
`;

function Menu({ open, setOpen }) {
 
  
  return (
    <MenuWrapper>
      <ul className={open ? "open" : ""}>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/" exact activeClassName="active" >
            Home
          </NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/about" activeClassName="active">
            About Us
          </NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/a"  activeClassName="active">
            Board of Trustees
          </NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/a"  activeClassName="active">
            News
          </NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/a"  activeClassName="active">
            Visuals
          </NavLink>
        </li>
      </ul>
    </MenuWrapper>
  );
}

export default Menu;
