import React, { useReducer } from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, { title: `Blog post #${state.length + 1}` }]
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [BlogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: 'add_blogpost' });
  };

  return (
    <BlogContext.Provider value={{ data: BlogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  )
};

export default BlogContext;