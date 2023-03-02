import { combineReducers } from "redux";

import { exampleReducer } from "./example/example.reducer";

export const rootReducer = combineReducers({
  example: exampleReducer,
});
