import { ADD, CLEAR, DELETE, TOGGLE } from "../types/todoTypes";

const initialState = {
  todos: [{ id: new Date().getTime(), text: "Test", completed: false }],
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        todos: [
          ...state.todos,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };
    case DELETE:
      return {
        todos: [...state.todos.filter((todo) => todo.id !== payload)],
      };
    case TOGGLE:
      return {
        todos: [
          ...state.todos.map(todo => {
            if (todo.id !== payload) {
              return todo
            }

            return {...todo, completed: !todo.completed}
          })
        ],
      };

      // const targetTodoIdx = state.todos.findIndex(
      //   (todo) => todo.id === payload
      // );
      // const targetItem = state.todos[targetTodoIdx];

      // return {
      //   todos: [
      //     ...state.todos.slice(0, targetTodoIdx),
      //     { ...targetItem, completed: !targetItem.completed },
      //     ...state.todos.slice(targetTodoIdx + 1),
      //   ],
      // };
    case CLEAR:
      return initialState;

    default:
      return state;
  }
};

export default todoReducer;
