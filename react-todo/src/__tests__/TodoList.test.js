// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList'; // Adjust path if necessary

describe('TodoList Component', () => {
  test('renders Todo items', () => {
    render(<TodoList />);

    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('adds a new Todo item', () => {
    render(<TodoList />);

    // Add a new todo
    fireEvent.click(screen.getByText('Add Todo'));

    // Check if the new todo was added
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles the completion of a Todo item', () => {
    render(<TodoList />);

    // Click on the todo item
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem);

    // Check if the todo item is crossed out (completed)
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    // Click again to toggle back to uncompleted
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a Todo item', () => {
    render(<TodoList />);

    // Click the delete button for "Learn React"
    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);

    // Check if the todo is removed
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
