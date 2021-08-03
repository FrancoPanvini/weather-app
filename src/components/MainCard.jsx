import React from "react";
import { connect } from "react-redux";

import CardButton from "./CardButton";


import {Container, Header, Row, Cell, Title, Text, Temp, Data} from './styles/MainCard.SC'



function MainCard(props) {
  return (
    <Container>
      <Header>
        <CardButton type='close' id={props.city.id}>&#10006;</CardButton>
      </Header>
      <Row>
        <Title>{props.city.name}</Title>
      </Row>
      <Cell>
        <div>
          <Temp>{Math.round(props.city.temp)}°</Temp>
          <Text>{props.city.weather}</Text>
        </div>
      </Cell>
      <Cell>
        <img
          src={`http://openweathermap.org/img/wn/${props.city.img}@2x.png`}
          alt="No se puede cargar la imagen"
        ></img>
      </Cell>
      <Cell>
        <Text>Min</Text>
      </Cell>
      <Cell>
        <Data>{Math.round(props.city.min)}°</Data>
      </Cell>
      <Cell>
        <Text>Max</Text>
      </Cell>
      <Cell>
        <Data>{Math.round(props.city.max)}°</Data>
      </Cell>
      <Cell>
        <Text>° Sensation</Text>
      </Cell>
      <Cell>
        <Data>{Math.round(props.city.termica)}°</Data>
      </Cell>
      <Cell>
        <Text>Pression</Text>
      </Cell>
      <Cell>
        <Data>{Math.round(props.city.presion)}</Data>
      </Cell>
      <Cell>
        <Text>Humidity</Text>
      </Cell>
      <Cell>
        <Data>{Math.round(props.city.humidity)}%</Data>
      </Cell>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    city: state.cities[0],
  };
}

export default connect(mapStateToProps)(MainCard);