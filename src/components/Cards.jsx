import React from "react";
import { connect } from "react-redux";

import Card from "./Card.jsx";

function Cards(props) {
  const rest = props.cities?.slice(1)
  return (
    <>
      {rest.map((city) => (
        <Card
          key={city.id}
          id={city.id}
          name={city.name}
          min={city.min}
          max={city.max}
          img={city.img}
        />
      ))}
    </>
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities,
  };
}

export default connect(mapStateToProps)(Cards);