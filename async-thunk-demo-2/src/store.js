import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { postsReducer } from "./Thunkexample1/reducers";
import { usersReducer } from "./ThunkExample2/reducers2";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
