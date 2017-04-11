import { combineReducers } from 'redux';

import todos from './todos';
import blogPost from './blogPost';

export default combineReducers({
  todos,
  blogPost,
});
