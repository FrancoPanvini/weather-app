import { ADD_CITY, REMOVE_CITY, ORDER_CITIES } from "./actionsNames";

const initialState = { cities: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CITY:
      const citiesId = state.cities && state.cities.map((city) => city.id);
      if (!citiesId.includes(action.ciudad.id)) {
        return { ...state, cities: [...state.cities, action.ciudad] };
      } else {
        alert("Ya la agregaste");
        return state;
      }
    case REMOVE_CITY:
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.id),
      };
    case ORDER_CITIES: {
      const index = state.cities.map((city) => city.id).indexOf(action.id);
      return {
        ...state,
        cities: [
          state.cities[index],
          ...state.cities.slice(1, index),
          state.cities[0],
          ...state.cities.slice(index + 1),
        ],
      };
    }
    default:
      return state;
  }
}

// function onSelect(id) {
//   setCities((cities) => {
//     const index = cities.map((city) => city.id).indexOf(id);
//     return [
//       cities[index],
//       ...cities.slice(1, index),
//       cities[0],
//       ...cities.slice(index + 1),
//     ];
//   });
// }
