import React from "react";
import { Link } from "react-router-dom";

import CloseButton from "./CloseButton";
import { AiOutlineCaretLeft } from "react-icons/ai"

import {
  Container,
  Header,
  Row,
  Cell,
  Title,
  Text,
  Temp,
  Data,
} from "./styles/MainCard.SC";


export default function Card({ city, onClose }) {
  return (
    <Container>
      <Header>
        <Link to="/">
          <CloseButton>
            <AiOutlineCaretLeft />
          </CloseButton>
        </Link>
      </Header>
      <Row>
        <Title>{city.name}</Title>
      </Row>
      <Cell>
        <div>
          <Temp>{Math.round(city.temp)}°</Temp>
          <Text>{city.weather}</Text>
        </div>
      </Cell>
      <Cell>
        <img
          src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
          alt="No se puede cargar la imagen"
        ></img>
      </Cell>
      <Cell>
        <Text>Min</Text>
      </Cell>
      <Cell>
        <Data>{Math.round(city.min)}°</Data>
      </Cell>
      <Cell>
        <Text>Max</Text>
      </Cell>
      <Cell>
        <Data>{Math.round(city.max)}°</Data>
      </Cell>
      <Cell>
        <Text>° Sensation</Text>
      </Cell>
      <Cell>
        <Data>{Math.round(city.termica)}°</Data>
      </Cell>
      <Cell>
        <Text>Pression</Text>
      </Cell>
      <Cell>
        <Data>{Math.round(city.presion)}</Data>
      </Cell>
      <Cell>
        <Text>Humidity</Text>
      </Cell>
      <Cell>
        <Data>{Math.round(city.humidity)}%</Data>
      </Cell>
    </Container>
  );
}
