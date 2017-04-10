export const CREATE_TODOS = 'CREATE_TODOS';

export function createTodos(todo) {
  return {
    type: CREATE_TODOS,
    todo,
  };
}
