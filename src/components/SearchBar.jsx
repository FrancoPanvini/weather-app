import React, { useState } from "react";
import styled from "styled-components";
import s from "./SearchBar.module.css";

const Bar = styled.input`
  margin: 1rem 1rem 0 1rem;
  width: 40vw;

  text-align: center;
  text-transform: Capitalize;
  font-family: var(--global-font);
  font-weight: 500;
  color: var(--font-color);

  background-color: transparent;

  border: solid 2px var(--other-color);
  border-radius: 2em;
  padding: 1em 0;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  text-align: center;
  font-family: var(--global-font);
  font-weight: 500;
  font-size: 0.8em;
  color: var(--font-color);

  background-color: var(--background-color2);
  opacity: 0.5;
  border: transparent 2px;
  border-radius: 2em;
  padding: 0.8em 1em;

  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const onChange = (event) => {
    setCity(event.target.value);
  };

  const onKeyPress = (event) => {
    if (event.charCode === 13) {
      onSearch(city);
      document.getElementById("ciudad").value = "";
    }
  };

  const handleOnSearch = () => {  
    onSearch(city);
    document.getElementById("ciudad").value = "";
  };

  return (
    <div>
      <Bar
        type="text"
        id="ciudad"
        placeholder="City"
        autocomplete="off"
        onKeyPress={onKeyPress}
        onChange={onChange}
      ></Bar>
      <Button className={s.jelloHorizontal} onClick={handleOnSearch}>
        Add
      </Button>
    </div>
  );
}
