import { CREATE_TODOS, TOGGLE_TODOS , SHOW_FILTER} from '../actions/todos';
import uuid from 'uuid/v4';

export const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODOS:
      return [...state,
        {
          id:uuid(),
          todo:action.todo,
          completed:false
        }
      ];

    case TOGGLE_TODOS:
      return state.map(todo => {
        if(todo.id !== action.id){
          return todo
          }
          return{
            ...todo,
            completed:!todo.completed
          }
      });

    case SHOW_FILTER:
      return action.filter

    default:
      return state;
  }
};
