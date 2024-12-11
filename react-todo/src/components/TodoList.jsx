import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

describe('TodoList Component', () => {
  const mockToggleTodo = jest.fn();
  const mockDeleteTodo = jest.fn();

  test('renders TodoList with initial todos', () => {
    const todos: Todo[] = [
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Write tests', completed: true },
    ];

    render(<TodoList todos={todos} toggleTodo={mockToggleTodo} deleteTodo={mockDeleteTodo} />);

    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Write tests/i)).toBeInTheDocument();
  });

  test('allows toggling a todo', () => {
    const todos: Todo[] = [
      { id: 1, text: 'Learn React', completed: false },
    ];

    render(<TodoList todos={todos} toggleTodo={mockToggleTodo} deleteTodo={mockDeleteTodo} />);

    const todoElement = screen.getByText(/Learn React/i);
    fireEvent.click(todoElement);

    expect(mockToggleTodo).toHaveBeenCalledWith(1);
  });

  test('allows deleting a todo', () => {
    const todos: Todo[] = [
      { id: 1, text: 'Learn React', completed: false },
    ];

    render(<TodoList todos={todos} toggleTodo={mockToggleTodo} deleteTodo={mockDeleteTodo} />);

    const deleteButton = screen.getByText(/Delete/i);
    fireEvent.click(deleteButton);

    expect(mockDeleteTodo).toHaveBeenCalledWith(1);
  });

  test('shows completed todos with line-through style', () => {
    const todos: Todo[] = [
      { id: 1, text: 'Learn React', completed: true },
    ];

    render(<TodoList todos={todos} toggleTodo={mockToggleTodo} deleteTodo={mockDeleteTodo} />);

    const todoElement = screen.getByText(/Learn React/i);
    expect(todoElement).toHaveStyle('text-decoration: line-through');
  });
});
