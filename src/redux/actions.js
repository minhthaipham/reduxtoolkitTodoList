export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};
export const removeTodoList = (data) => {
  return {
    type: "todoList/deleteTodo",
    payload: data,
  };
};
export const filterSearch = (data) => {
  return {
    type: "filer/search",
    payload: data,
  };
};
export const filterStatus = (data) => {
  return {
    type: "filer/status",
    payload: data,
  };
};
export const filterPriority = (data) => {
  return {
    type: "filer/priority",
    payload: data,
  };
};
