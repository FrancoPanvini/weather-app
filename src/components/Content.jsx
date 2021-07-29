import React from "react";
import styled from "styled-components";

const Cont = styled.section`
  position: absolute;
  top: 6rem;
  bottom: 0;
  left: 0;
  right: 0;

  margin: auto;

  // display: flex;
  // justify-content: center;
  // align-items: center;
  // flex-wrap: wrap;

  //Prueba
  display: grid;
  grid-template-columns: 0.25fr .75fr;
  grid-template-rows: 1fr;
  //
`;

export const ContentRow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentFlexBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export default function Content({ children }) {
  return <Cont>{children}</Cont>;
}
