// src/components/BlogPost.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Import useParams to get URL parameters

function BlogPost() {
  // useParams hook extracts parameters from the URL. Here, we get the 'id'.
  const { id } = useParams();

  // Mock data for blog posts (replace with actual data fetching in a real app)
  const posts = {
    '123': { title: 'Understanding React Router', content: 'React Router is a powerful library for declarative routing in React applications.' },
    '456': { title: 'State Management with Context API', content: 'The Context API provides a way to pass data through the component tree without having to pass props down manually at every level.' },
    '789': { title: 'Optimizing Performance in React Apps', content: 'Techniques like memoization, lazy loading, and code splitting can significantly boost your React app’s performance.' },
  };

  const post = posts[id]; // Get the specific post based on ID from URL

  if (!post) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', fontSize: '1.2em', color: 'red' }}>
        <h2>Blog Post Not Found</h2>
        <p>The post with ID "{id}" does not exist.</p>
        <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '30px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ color: '#333', fontSize: '2.5em', marginBottom: '20px' }}>{post.title}</h1>
      <p style={{ color: '#555', fontSize: '1.1em', lineHeight: '1.8' }}>{post.content}</p>
      <Link to="/" style={{ display: 'inline-block', marginTop: '30px', padding: '10px 15px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
        Back to Home
      </Link>
    </div>
  );
}

export default BlogPost;
