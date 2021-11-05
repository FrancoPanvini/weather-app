import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

const persistedState = localStorage.getItem("State")
  ? JSON.parse(localStorage.getItem("State"))
  : { cities: [] };

const store = createStore(
  reducer,
  persistedState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  localStorage.setItem("State", JSON.stringify(store.getState()));
});

export default store;
