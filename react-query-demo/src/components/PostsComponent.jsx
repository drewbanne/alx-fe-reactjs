// src/components/PostsComponent.jsx

import React from 'react';
import { useQuery } from 'react-query'; // Import the useQuery hook

// Define the data fetching function.
// React Query expects a function that returns a Promise.
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// PostsComponent fetches and displays a list of posts using React Query.
function PostsComponent() {
  // useQuery hook manages the data fetching lifecycle.
  // 'posts' is a unique query key. It's used for caching and identifying this specific query.
  // 'fetchPosts' is the query function that actually fetches the data.
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery('posts', fetchPosts);

  // --- Loading State ---
  if (isLoading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', fontSize: '1.2em', color: '#555' }}>
        Loading posts... ⏳
      </div>
    );
  }

  // --- Error State ---
  if (isError) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', fontSize: '1.2em', color: '#d32f2f' }}>
        Error: {error.message} ❌
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px', fontSize: '2.5em' }}>
        JSONPlaceholder Posts
        {isFetching ? <span style={{ marginLeft: '10px', fontSize: '0.8em', color: '#007bff' }}> (Updating...)</span> : null}
      </h1>

      {/* Button to manually refetch data */}
      <button
        onClick={() => refetch()} // Trigger refetch on click
        style={{
          display: 'block',
          margin: '0 auto 30px auto',
          padding: '10px 20px',
          fontSize: '1em',
          backgroundColor: '#28a745', // Green button
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          transition: 'background-color 0.3s ease',
          opacity: isFetching ? 0.7 : 1 // Dim if fetching
        }}
        disabled={isFetching} // Disable button while fetching
      >
        {isFetching ? 'Refetching...' : 'Refetch Posts'}
      </button>

      <ul style={{ listStyle: 'none', padding: '0' }}>
        {data.map((post) => (
          <li key={post.id} style={{
            backgroundColor: '#f8f9fa',
            border: '1px solid #e9ecef',
            borderRadius: '8px',
            padding: '15px',
            marginBottom: '15px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{ color: '#007bff', fontSize: '1.5em', marginBottom: '10px' }}>
              {post.title}
            </h2>
            <p style={{ color: '#555', fontSize: '1em', lineHeight: '1.6' }}>
              {post.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
