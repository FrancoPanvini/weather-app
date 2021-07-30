import React, { useState } from "react";

import MainCard from "./components/MainCard";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar";

import {
  Content,
  ContentRow,
  ContentFlexBox,
} from "./components/styles/App.SC";

import fetchCity from "./services/fetchCity";

function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    return fetchCity(ciudad, setCities, cities);
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function onSelect(id) {
    setCities((cities) => {
      const index = cities.map((city) => city.id).indexOf(id);
      return [
        cities[index],
        ...cities.slice(1, index),
        cities[0],
        ...cities.slice(index + 1),
      ];
    });
  }

  const [first, ...rest] = cities;

  return (
    <>
      <ContentRow>
        <SearchBar onSearch={onSearch} />
      </ContentRow>
      <Content>
        {first && <MainCard city={first} key={first.id} />}
        <ContentFlexBox>
          <Cards cities={rest} onClose={onClose} onSelect={onSelect} />
        </ContentFlexBox>
      </Content>
    </>
  );
}

export default App;
