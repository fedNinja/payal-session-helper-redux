import { CREATE_BLOG_POST } from '../actions/blogPost';

export const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BLOG_POST:
      return [...state, action.blogPost];
    default:
      return state;
  }
};
