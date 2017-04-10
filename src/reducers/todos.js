import { CREATE_TODOS } from '../actions/todos';

export const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODOS:
      return [...state, action.todo];
    default:
      return state;
  }
};
