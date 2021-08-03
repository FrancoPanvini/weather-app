import { ADD_CITY } from "../store/actionsNames";

const apiKey = process.env.REACT_APP_API_KEY;

function fetchCityByCoords(lat, long, dispatch) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`
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
        dispatch({ type: ADD_CITY, ciudad });
      } else {
        alert("Ciudad no encontrada");
      }
    });
}

export default fetchCityByCoords;
