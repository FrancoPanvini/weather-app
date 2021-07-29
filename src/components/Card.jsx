import React from "react";
import styled from "styled-components";

import CloseButton from "./CloseButton";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr 1fr 1fr 1fr 1fr;
  width: 12rem;
  height: 16rem;

  background-color: #0036387f;
  border-radius: 1rem;
  border: solid 2px #ffffffbd;
  backdrop-filter: blur(4px);
  box-shadow: 2px 2px 20px 10px black;

  margin: 0.5rem 1rem;

  transition: all 0.3s ease-out;
  &:hover {
    width: 13rem;
    height: 17rem;
    margin: 0 0.5rem;
    background-color: #003638bd;
  }
`;
const Header = styled.div`
  grid-column: 1 / span 2;
  display: flex;
  justify-content: flex-end;
`;

const Title = styled.h1`
//texto para q no wrapee cuando no entra
  // text-overflow: ellipsis;
  // white-space: nowrap;
  // overflow: hidden;
  
  text-align: center;

  cursor: pointer;
`;

const Row = styled.div`
  grid-column: 1 / span 2;
  display: flex;
  justify-content: space-around;
`;

const Text = styled.span`
  font-size: 1em;
`;
const Temp = styled.span`
  color: var(--other-color);
  font-size: 2em;
  font-weight: 300;
`;

export default function Card(props) {
  return (
    <Container>
      <Header>
        <CloseButton onClose={props.onClose} />
      </Header>
      <Row>
        <Title onClick={props.onSelect}>{props.name}</Title>
      </Row>
      <Row>
        <img
          src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
          alt="No se puede cargar la imagen"
        ></img>
      </Row>
      <Row>
        <Temp>{Math.round(props.min)}°</Temp>
        <Temp>{Math.round(props.max)}°</Temp>
      </Row>
      <Row>
        <Text>Min</Text>
        <Text>Max</Text>
      </Row>
    </Container>
  );
}
