import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { postsReducer } from "./Thunkexample1/reducers";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  posts: postsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
