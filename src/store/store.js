import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

// + const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// + const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
// - const store = createStore(reducer, /* preloadedState, */ compose(
//     applyMiddleware(...middleware)
//   ));

//   const store = createStore(reducer,applyMiddleware(thunk));
const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
