// src/__tests__/TodoList.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList'; // Adjust path if necessary

describe('TodoList Component', () => {
  // Test 1: Initial Render Test
  // Verifies that the component renders correctly with initial todos.
  test('renders initial todos correctly', () => {
    render(<TodoList />);

    // Check if the heading is present.
    expect(screen.getByText(/My Todo List/i)).toBeInTheDocument();

    // Check if the initial demo todos are rendered.
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();

    // Check if "Build a Todo App" is marked as completed (line-through style).
    const completedTodo = screen.getByText('Build a Todo App');
    expect(completedTodo).toHaveStyle('text-decoration: line-through');

    // Check if "Learn React" is not completed.
    const incompleteTodo = screen.getByText('Learn React');
    expect(incompleteTodo).not.toHaveStyle('text-decoration: line-through');
  });

  // Test 2: Test Adding Todos
  // Verifies that a new todo can be added to the list.
  test('allows users to add a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');

    // Simulate typing a new todo.
    fireEvent.change(input, { target: { value: 'Buy groceries' } });
    expect(input.value).toBe('Buy groceries'); // Verify input value changed.

    // Simulate clicking the add button.
    fireEvent.click(addButton);

    // Check if the new todo appears in the document.
    expect(screen.getByText('Buy groceries')).toBeInTheDocument();

    // Check if the input field is cleared after submission.
    expect(input.value).toBe('');
  });

  // Test 3: Test Toggling Todos
  // Verifies that clicking a todo toggles its completion status.
  test('allows users to toggle a todo completion status', () => {
    render(<TodoList />);

    // Get the "Learn React" todo (initially not completed).
    const learnReactTodo = screen.getByText('Learn React');
    expect(learnReactTodo).not.toHaveStyle('text-decoration: line-through');

    // Simulate clicking on the todo to toggle its status.
    fireEvent.click(learnReactTodo);

    // Check if it now has line-through style (completed).
    expect(learnReactTodo).toHaveStyle('text-decoration: line-through');

    // Simulate clicking again to toggle back.
    fireEvent.click(learnReactTodo);
    expect(learnReactTodo).not.toHaveStyle('text-decoration: line-through'); // Should be uncompleted again.
  });

  // Test 4: Test Deleting Todos
  // Verifies that clicking the delete button removes a todo.
  test('allows users to delete a todo', () => {
    render(<TodoList />);

    // Get the "Write tests" todo (which has a delete button).
    const writeTestsTodo = screen.getByText('Write tests');
    expect(writeTestsTodo).toBeInTheDocument();

    // Find the delete button associated with this todo (using its parent).
    // This is a robust way to find buttons that might not have unique text/roles.
    const deleteButton = writeTestsTodo.nextSibling; // Assuming delete button is the next sibling
    expect(deleteButton).toBeInTheDocument();
    expect(deleteButton).toHaveTextContent('Delete');

    // Simulate clicking the delete button.
    fireEvent.click(deleteButton);

    // Check that the todo is no longer in the document.
    expect(writeTestsTodo).not.toBeInTheDocument();
  });
});
