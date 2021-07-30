import React, { useState } from "react";

import { Bar, Button } from "./styles/SearchBar.SC";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const onChange = (event) => {
    setCity(event.target.value);
  };

  const onKeyPress = (event) => {
    if (event.charCode === 13) {
      onSearch(city);
      document.getElementById("ciudad").value = "";
      setCity('')
    }
  };
  
  const handleOnSearch = () => {
    onSearch(city);
    document.getElementById("ciudad").value = "";
    setCity('')
  };

  return (
    <>
      <Bar
        type="text"
        id="ciudad"
        placeholder="City"
        autocomplete="off"
        onKeyPress={onKeyPress}
        onChange={onChange}
      ></Bar>
      <Button onClick={handleOnSearch}>+</Button>
    </>
  );
}
