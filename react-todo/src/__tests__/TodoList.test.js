import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList'; // Adjust the import path as needed

describe('TodoList Component', () => {
  test('renders TodoList with initial todos', () => {
    const todos = [
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Write tests', completed: true },
    ];

    render(<TodoList todos={todos} />);

    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Write tests/i)).toBeInTheDocument();
  });

  test('allows a new todo to be added', () => {
    const addTodo = jest.fn();
    render(<TodoList todos={[]} addTodo={addTodo} />);

    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const button = screen.getByText(/Add Todo/i);

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    expect(addTodo).toHaveBeenCalledWith('New Todo');
  });

  test('toggles todo completion status', () => {
    const todos = [
      { id: 1, text: 'Learn React', completed: false },
    ];

    render(<TodoList todos={todos} />);

    const todo = screen.getByText(/Learn React/i);
    
    expect(todo).not.toHaveClass('completed');

    fireEvent.click(todo);

    expect(todo).toHaveClass('completed');
  });

  test('deletes a todo', () => {
    const deleteTodo = jest.fn();
    const todos = [
      { id: 1, text: 'Learn React', completed: false },
    ];

    render(<TodoList todos={todos} deleteTodo={deleteTodo} />);

    const deleteButton = screen.getByText(/Delete/i);

    fireEvent.click(deleteButton);

    expect(deleteTodo).toHaveBeenCalledWith(1);
  });
});