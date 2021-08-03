import React from "react";
import {Link} from 'react-router-dom';

import CardButton from "./CardButton";

import { Container, Header, Title, Row, Text, Temp } from "./styles/Card.SC";
import { AiFillCaretUp } from "react-icons/ai";
import { FaInfo } from "react-icons/fa";

export default function Card(props) {
  return (
    <Container>
      <Header>
        <Link to={`/${props.id}`}>
        <CardButton >
          <FaInfo />
        </CardButton>
        </Link>
        <CardButton type='main' id={props.id} >
          <AiFillCaretUp />
        </CardButton>
        <CardButton type='close' id={props.id}>&#10006;</CardButton>
      </Header>
      <Row>
        <Title>{props.name}</Title>
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
