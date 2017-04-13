export const CREATE_TODOS = 'CREATE_TODOS';
export const TOGGLE_TODOS = 'TOGGLE_TODOS';
export const SHOW_FILTER = 'SHOW_FILTER';


export function createTodos(todo) {
  return {
    type: CREATE_TODOS,
    todo
  };
}

export function toggleTodos(id) {
  return {
    type: TOGGLE_TODOS,
    id
  };
}

export function showFilter(filter) {
  return{
    type: SHOW_FILTER,
    filter
  };
}
