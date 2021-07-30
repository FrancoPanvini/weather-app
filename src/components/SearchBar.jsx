import React, { useState } from "react";

import { Bar, Button } from "./styles/SearchBar.SC";

export default function SearchBar({ onSearch }) {

  const [city, setCity] = useState("");

  const onChange = (event) => {
    setCity(event.target.value.toLowerCase());
  };

  const onKeyPress = (event) => {
    if (event.charCode === 13) {
      onSearch(city);
      setCity('')
    }
  };
  
  const handleOnSearch = () => {
    onSearch(city);
    setCity('')
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
