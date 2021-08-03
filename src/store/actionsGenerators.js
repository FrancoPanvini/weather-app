import { REMOVE_CITY, ORDER_CITIES} from "./actionsNames";

import fetchCity from "../services/fetchCity";

export function cityAdd(ciudad) {
  //   const city = fetchCity(ciudad);
  //   return { type: ADD_CITY, city };
  return function (dispatch) {
    fetchCity(ciudad,dispatch);
  };
}

export function cityRemove (id) {
  return {type:REMOVE_CITY, id}
}

export function citiesOrder (id) {
  return {type:ORDER_CITIES, id}
}

