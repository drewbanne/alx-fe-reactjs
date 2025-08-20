// src/components/TodoList.jsx

import React, { useState } from 'react';

// TodoList component manages and displays a list of todo items.
function TodoList() {
  // Initialize state with a few demo todo items.
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: true },
    { id: 3, text: 'Write tests', completed: false },
  ]);

  // State for the new todo input field.
  const [newTodoText, setNewTodoText] = useState('');

  // Function to add a new todo item.
  const addTodo = (e) => {
    e.preventDefault(); // Prevent default form submission.
    if (newTodoText.trim() === '') {
      return; // Do not add empty todos.
    }
    const newTodo = {
      id: Date.now(), // Unique ID based on timestamp.
      text: newTodoText.trim(),
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setNewTodoText(''); // Clear input field.
  };

  // Function to toggle the completion status of a todo item.
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo item.
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '40px auto',
      padding: '30px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px', fontSize: '2.5em' }}>
        My Todo List ✅
      </h1>

      {/* Form to add new todos */}
      <form onSubmit={addTodo} style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
        <input
          type="text"
          placeholder="Add a new todo..."
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          style={{
            flexGrow: '1',
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            fontSize: '1.1em'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '12px 20px',
            backgroundColor: '#4CAF50', // Green
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1.1em',
            transition: 'background-color 0.3s ease'
          }}
        >
          Add Todo
        </button>
      </form>

      {/* List of todos */}
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {todos.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666', fontStyle: 'italic' }}>No todos yet!</p>
        ) : (
          todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '15px',
                marginBottom: '10px',
                backgroundColor: todo.completed ? '#e0ffe0' : '#ffffff', // Light green if completed
                border: `1px solid ${todo.completed ? '#a5d6a7' : '#eee'}`,
                borderRadius: '8px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                transition: 'background-color 0.3s ease, border-color 0.3s ease'
              }}
            >
              <span
                onClick={() => toggleTodo(todo.id)} // Toggle completion on click
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? '#666' : '#333',
                  cursor: 'pointer',
                  flexGrow: '1',
                  fontSize: '1.2em'
                }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)} // Delete todo on click
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#f44336', // Red
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '0.9em',
                  transition: 'background-color 0.3s ease'
                }}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoList;
