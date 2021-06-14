import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import question from "./reducer/questionsReducer";

const reducers = combineReducers({
  question,
});

let middleware = [];
if (process.env.NODE_ENV === "development") {
  middleware = [...middleware, thunk, logger];
} else {
  middleware = [...middleware, thunk];
}

export const store = createStore(
  reducers,
  {},
  applyMiddleware(...middleware),
);
