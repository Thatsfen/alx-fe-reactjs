// src/components/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();  // Get the dynamic parameter (id) from the URL
  
  return (
    <div>
      <h2>Blog Post {id}</h2>
      <p>This is the content of the blog post with ID: {id}</p>
    </div>
  );
};

export default BlogPost;
