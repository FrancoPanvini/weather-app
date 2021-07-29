import React, { useState } from "react";
import ImageBackgroud from "./components/ImageBackground.jsx";
import Content, { ContentRow, ContentFlexBox } from "./components/Content";
import MainCard from "./components/MainCard";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar";

import image from "./media/background2.jpg";

function App() {
  const [cities, setCities] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;
  function onSearch(ciudad) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            id: recurso.id,
            name: recurso.name,
            weather: recurso.weather[0].main,
            img: recurso.weather[0].icon,
            temp: recurso.main.temp,
            termica: recurso.main.feels_like,
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            presion: recurso.main.pressure,
            humidity: recurso.main.humidity,
            wind: recurso.wind.speed,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
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
