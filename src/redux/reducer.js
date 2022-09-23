import { combineReducers } from "redux";
import filterReducer from "../components/Filters/FilterSlice";
import todoListReducer from "../components/TodoList/TodoSlice";

// const rootReducer = (state = {}, action) => {
//   return {
//     todoList: todoListReducer(state.todoList, action),
//     filter: filterReducer(state.filter, action),
//   };
// };

const rootReducer = combineReducers({
  todoList: todoListReducer,
  filter: filterReducer,
});

export default rootReducer;
