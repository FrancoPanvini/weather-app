import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import CardButton from "./CardButton";
import { AiOutlineCaretLeft } from "react-icons/ai";

import {
  Container,
  Header,
  Row,
  Cell,
  Title,
  Text,
  Temp,
  Data,
} from "./styles/InfoCard.SC";

function InfoCard(props) {
  function onFilter(id) {
    const city = props.cities.filter((c) => c.id === parseInt(id));
    if (city.length > 0) {
      return city[0];
    } else {
      return null;
    }
  }
  const city = onFilter(props.id);
  
  return (
    <Container>
      <Header>
        <Link to="/">
          <CardButton>
            <AiOutlineCaretLeft />
          </CardButton>
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

function mapStateToProps(state) {
  return {
    cities: state.cities,
  };
}

export default connect(mapStateToProps)(InfoCard);
