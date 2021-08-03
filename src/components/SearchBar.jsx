import React, { useState } from "react";
import { connect } from "react-redux";

import { cityAdd, cityAddByCoords } from "../store/actionsGenerators";
import { Bar, Button } from "./styles/SearchBar.SC";
import { BsGeoAlt } from "react-icons/bs";

function SearchBar(props) {
  const [city, setCity] = useState("");

  const onChange = (event) => {
    setCity(event.target.value.toLowerCase());
  };

  const onKeyPress = (event) => {
    if (event.charCode === 13) {
      props.cityAdd(city);
      setCity("");
    }
  };

  const handleOnSearch = () => {
    props.cityAdd(city);
    setCity("");
  };

  const geoOnClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos)=>{
        props.cityAddByCoords(pos.coords.latitude,pos.coords.longitude)
      })
    }
  }

  return (
    <>
      <Bar
        type="text"
        id="ciudad"
        placeholder="City"
        autocomplete="off"
        value={city}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></Bar>
      <Button onClick={handleOnSearch}>+</Button>
      <Button style={{ padding: "6px 6px" }} onClick={geoOnClick}>
        <BsGeoAlt />
      </Button>
    </>
  );
}

export default connect(null, { cityAdd, cityAddByCoords })(SearchBar);
