import React from "react";
import styled from "styled-components";

const ParaWrapper = styled.p`
  font-size: 15px;
  font-family: ${(props) => props.theme.fam.alegreya};
  line-height: 26px;
`;

function Paragraph({ children }) {
  return <ParaWrapper>{children}</ParaWrapper>;
}

export default Paragraph;
