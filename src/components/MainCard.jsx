import React from "react";
import styled from "styled-components";

import CloseButton from "./CloseButton";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 18rem;
  height: 24rem;

  background-color: #0036387f;
  border-radius: 1rem;
  border: solid 2px #ffffffbd;
  backdrop-filter: blur(4px);
  box-shadow: 2px 2px 20px 10px black;

  margin: 0.5rem 1rem;

  // position: fixed;
`;
const Header = styled.div`
  grid-column: 1 / span 2;
  display: flex;
  justify-content: flex-end;
`;

const Row = styled.div`
  grid-column: 1 / span 2;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Cell = styled.div`
  // grid-column: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
`;

const Text = styled.div`
  font-size: 1em;
`;

const Temp = styled.div`
  color: var(--other-color);
  font-size: 3em;
  font-weight: 300;
`;

const Data = styled.div`
  color: var(--other-color);
  font-size: 1.5em;
  font-weight: 300;
`;

export default function Card(props) {
  return (
    <Container>
      <Header>
        <CloseButton onClose={props.onClose} />
      </Header>
      <Row>
        <Title>{props.name}</Title>
      </Row>
      <Cell>
        <div>
          <Temp>{Math.round(props.temp)}°</Temp>
          <Text>{props.weather}</Text>
        </div>
      </Cell>
      <Cell>
        <img
          src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
          alt="No se puede cargar la imagen"
        ></img>
      </Cell>
      <Cell>
        <Text>Min</Text>
      </Cell>
      <Cell>
        <Data>{Math.round(props.min)}°</Data>
      </Cell>
      <Cell>
        <Text>Max</Text>
      </Cell>
      <Cell>
        <Data>{Math.round(props.max)}°</Data>
      </Cell>
      <Cell>
        <Text>° Sensation</Text>
      </Cell>
      <Cell>
        <Data>{Math.round(props.termica)}°</Data>
      </Cell>
      <Cell>
        <Text>Pression</Text>
      </Cell>
      <Cell>
        <Data>{Math.round(props.presion)}</Data>
      </Cell>
      <Cell>
        <Text>Humidity</Text>
      </Cell>
      <Cell>
        <Data>{Math.round(props.humidity)}%</Data>
      </Cell>
    </Container>
  );
}
