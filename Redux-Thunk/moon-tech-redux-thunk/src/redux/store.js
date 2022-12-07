import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
// import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";
import cartCounter from "./middlewares/cartCounter";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(cartCounter))
);

export default store;
// top of the game to the you
