import { ADD, CLEAR, DELETE, TOGGLE } from "../types/todoTypes";

export const addTodo = (payload) => {
  return { type: ADD, payload };
};
export const clearTodo = () => {
  return { type: CLEAR };
};
export const deleteTodo = (payload) => {
  return { type: DELETE, payload };
};
export const toggleTodo = (payload) => {
  return { type: TOGGLE, payload };
};
