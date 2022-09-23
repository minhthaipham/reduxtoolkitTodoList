// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";
// const store = createStore(rootReducer, composeWithDevTools());
// // 3 parameters

// export default store;
import filterSlice from "../components/Filters/filterSlice";
import todoListSlice from "../components/TodoList/todoSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});

export default store;
