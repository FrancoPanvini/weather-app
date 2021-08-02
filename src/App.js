import React, { useState } from "react";
import { Route } from "react-router-dom";

import MainCard from "./components/MainCard";
import InfoCard from "./components/InfoCard";
import Cards from "./components/Cards.jsx";
import Navbar from "./components/Navbar.jsx";
import Help from "./components/Help.jsx";

import { Content, ContentFlexBox } from "./components/styles/App.SC";

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

  function onFilter(id) {
    let city = cities.filter((c) => c.id === parseInt(id));
    if (city.length > 0) {
      return city[0];
    } else {
      return null;
    }
  }

  const [first, ...rest] = cities;

  return (
    <>
      <Route path="/">
        <Navbar onSearch={onSearch} />
      </Route>
      <Route path="/" exact>
        <Content>
          {first && <MainCard city={first} onClose={onClose} key={first.id} />}
          <ContentFlexBox>
            <Cards cities={rest} onClose={onClose} onSelect={onSelect} />
          </ContentFlexBox>
        </Content>
      </Route>
      <Route path="/help">
        <Help />
      </Route>
      <Route
        exact
        path="/:id"
        render={({ match }) => (
          <Content>
            {first && <InfoCard
              city={onFilter(match.params.id)}
              onClose={onClose}
              key={match.params.id}
            />}
          </Content>
        )}
      ></Route>
    </>
  );
}

export default App;
