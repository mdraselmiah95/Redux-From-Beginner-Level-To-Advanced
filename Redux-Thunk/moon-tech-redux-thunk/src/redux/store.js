import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
// import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
