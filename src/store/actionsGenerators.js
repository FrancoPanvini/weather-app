import { REMOVE_CITY, ORDER_CITIES } from "./actionsNames";

import fetchCity from "../services/fetchCity";
import fetchCityByCoords from "../services/fetchCityByCoords";

export function cityAdd(ciudad) {
  return function (dispatch) {
    fetchCity(ciudad, dispatch);
  };
}

export function cityAddByCoords(lat, long) {
  return function (dispatch) {
    fetchCityByCoords(lat, long, dispatch);
  };
}

export function cityRemove(id) {
  return { type: REMOVE_CITY, id };
}

export function citiesOrder(id) {
  return { type: ORDER_CITIES, id };
}
