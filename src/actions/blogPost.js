export const CREATE_BLOG_POST = 'CREATE_BLOG_POST';

export function createBlogPost(blogPost) {
  return {
    type: CREATE_BLOG_POST,
    blogPost,
  };
}
