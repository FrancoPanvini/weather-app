import React from "react";

import CloseButton from "./CloseButton";

import {Container, Header, Row, Cell, Title, Text, Temp, Data} from './styles/MainCard.SC'



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
