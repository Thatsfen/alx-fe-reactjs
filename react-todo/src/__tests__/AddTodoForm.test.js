import { render, screen, fireEvent } from '@testing-library/react';
import AddTodoForm from '../components/AddTodoForm';

describe('AddTodoForm Component', () => {
  test('renders input and button', () => {
    render(<AddTodoForm />);
    expect(screen.getByPlaceholderText(/Add a new todo/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Todo/i)).toBeInTheDocument();
  });

  test('calls onSubmit with correct input value', () => {
    const onSubmit = jest.fn();
    render(<AddTodoForm onSubmit={onSubmit} />);

    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const button = screen.getByText(/Add Todo/i);

    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(button);

    expect(onSubmit).toHaveBeenCalledWith('Test Todo');
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
