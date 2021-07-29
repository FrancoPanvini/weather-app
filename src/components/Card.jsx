import React from "react";

import CloseButton from "./CloseButton";

import { Container, Header, Title, Row, Text, Temp } from "./styles/Card.SC";

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
