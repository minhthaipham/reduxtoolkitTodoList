import { createSelector } from "reselect";
export const todoAdd = (state) => state.todoList;
export const filterSearchSelector = (state) => state.filter.search;
export const filterStatusSelector = (state) => state.filter.status;
export const filterPrioritySelector = (state) => state.filter.priority;
export const filterSearch = createSelector(
  todoAdd,
  filterSearchSelector,
  filterStatusSelector,

  (todoList, search, status) => {
    return todoList.filter((todo) => {
      return (
        todo.name.toLowerCase().includes(search.toLowerCase()) &&
        (status === "All" ||
          todo.completed === (status === "Completed" ? true : false))
      );
    });
  }
);
