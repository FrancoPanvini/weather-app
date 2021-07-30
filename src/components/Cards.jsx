import React from "react";
import Card from "./Card.jsx";

export default function Cards({ cities, onClose, onSelect }) {
  return (
    <>
      {cities.map((city) => (
        <Card
          key={city.id}
          id={city.id}
          name={city.name}
          min={city.min}
          max={city.max}
          img={city.img}
          onClose={() => onClose(city.id)}
          onSelect={() => onSelect(city.id)}
        />
      ))}
    </>
  );
}
