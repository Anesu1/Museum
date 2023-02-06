import React from "react";
import styled from "styled-components";
import { HOME_QUERY } from "../App";
import {useQuery} from '@apollo/client';

const LeftDiv = styled.div`
  background: ${(props) => props.color};
  width: 50px;
  position: absolute;
  left: -22px;
  height: 100%;
  top: 0;
  .img {
    background: url("${props => props.imageUrl}");
    width: 100%;
    background-repeat: repeat-y;
    height: 100%;
    background-size: contain;
  }
`;

function Pattern({ bgColor }) {
  const { data } = useQuery(HOME_QUERY);


  return (
    <LeftDiv color={bgColor} className="pattern" imageUrl={data.pages.edges[1].node.blocks[1].attributes.url}>
      <div className="img"></div>
    </LeftDiv>
  );
}

export default Pattern;
