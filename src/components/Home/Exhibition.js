import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import Pattern from "../../styled/Pattern";
import { HOME_QUERY } from "../../App";
import {useQuery} from '@apollo/client';

const ExWrapper = styled.section`
  position: relative;
  padding: 5%;
  .ex-inner {
    padding-left: 10%;
    @media (min-width: 768px) {
      padding-left: 20px;
    }
    h2 {
      @media (min-width: 768px) {
        font-size: 26px;
      }
      img {
        max-width: 430px;
        height: 7px;
        @media (min-width: 768px) {
          max-width: 545px;
        }
      }
    }
    p {
      margin-bottom: 30px;
    }
  }
`;

function Exhibition() {
  const { data } = useQuery(HOME_QUERY);


  return (
    <ExWrapper>
      <Pattern bgColor="#000" />
      <div className="ex-inner">
        <Heading text={data.pages.edges[1].node.blocks[10].attributes.content} />
        <Paragraph>
          {data.pages.edges[1].node.blocks[11].attributes.content}
        </Paragraph>
        <Paragraph>
          {data.pages.edges[1].node.blocks[12].attributes.content}
        </Paragraph>
      </div>
    </ExWrapper>
  );
}

export default Exhibition;
