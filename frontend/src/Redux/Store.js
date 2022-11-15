import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import thunk from "redux-thunk";
import { userReducer } from "./Users/users.reducer";

const rootreducer = combineReducers({
  user: userReducer,
});

export const store = legacy_createStore(rootreducer, applyMiddleware(thunk));
