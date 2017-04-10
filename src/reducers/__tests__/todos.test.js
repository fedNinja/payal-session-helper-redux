import todosReducer, { initialState } from '../todos';
import { createTodos } from '../../actions/todos';

describe('todo reducer', () => {
  describe('#createTodos', () => {
    it('should add a new todo to the reducer', () => {
      const expected = ['hello'];

      expect(todosReducer(initialState, createTodos('hello'))).toEqual(expected);
    });

    it('should add a new todo to the reducer and keep the last one', () => {
      const expected = ['hello', 'Payal'];

      expect(todosReducer(['hello'], createTodos('Payal'))).toEqual(expected);
    });
  });
});
