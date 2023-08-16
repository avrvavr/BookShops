import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import bookReducer from "../reducers/booksReducers"; // Импортируйте ваш reducer

const rootReducer = combineReducers({
  books: bookReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
