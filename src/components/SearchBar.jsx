import React, { useState } from "react";
import { connect } from "react-redux";

import { cityAdd } from "../store/actionsGenerators";
import { Bar, Button } from "./styles/SearchBar.SC";

// export default function SearchBar({ onSearch }) {
function SearchBar(props) {
  const [city, setCity] = useState("");

  const onChange = (event) => {
    setCity(event.target.value.toLowerCase());
  };

  function onSearch(ciudad) {
    // return fetchCity(ciudad, setCities, cities);
    props.cityAdd(ciudad);
  }

  const onKeyPress = (event) => {
    if (event.charCode === 13) {
      onSearch(city);
      setCity("");
    }
  };

  const handleOnSearch = () => {
    onSearch(city);
    setCity("");
  };

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
    </>
  );
}

export default connect(null, { cityAdd })(SearchBar);
