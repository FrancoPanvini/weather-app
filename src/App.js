import React, { useState } from "react";

import ImageBackgroud from "./components/ImageBackground.jsx";
import MainCard from "./components/MainCard";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar";

import {Content, ContentRow, ContentFlexBox } from "./components/styles/App.SC";
  
import fetchCity from './services/fetchCity'

import image from "./media/background2.jpg";

function App() {
  const [cities, setCities] = useState([]);
  
  function onSearch(ciudad) {
    return fetchCity (ciudad, setCities);
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
      <ImageBackgroud src={image} />
      <ContentRow>
        <SearchBar onSearch={onSearch} />
      </ContentRow>
      <Content>
        {first && (
          <MainCard
            key={first.id}
            name={first.name}
            temp={first.temp}
            weather={first.weather}
            img={first.img}
            min={first.min}
            max={first.max}
            termica={first.termica}
            presion={first.presion}
            humidity={first.humidity}
            onClose={() => onClose(first.id)}
          />
        )}
        <ContentFlexBox>
          <Cards cities={rest} onClose={onClose} onSelect={onSelect} />
        </ContentFlexBox>
      </Content>
    </>
  );
}

export default App;
