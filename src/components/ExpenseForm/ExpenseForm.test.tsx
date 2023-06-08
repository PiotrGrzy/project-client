import { fireEvent, render, waitFor } from '@testing-library/react';

import { addExpense, updateExpense } from '@/services/expenses.service';

import ExpenseForm from './ExpenseForm';

jest.mock('@/context/modalContext', () => ({
  useModal: jest.fn(() => ({
    selectedTransaction: null,
    closeModal: jest.fn(),
  })),
}));

jest.mock('@tanstack/react-query', () => ({
  useQueryClient: jest.fn(() => ({
    invalidateQueries: jest.fn(),
  })),
  useMutation: jest.fn(() => ({
    mutate: jest.fn(),
  })),
}));

jest.mock('@/services/expenses.service', () => ({
  addExpense: jest.fn(),
  updateExpense: jest.fn(),
}));

describe('Expense Form component', () => {
  it('renders the form with correct title', () => {
    const { getByText } = render(<ExpenseForm />);

    const titleElement = getByText('Add new expense');

    expect(titleElement).toBeInTheDocument();
  });

  it('submits the form correctly when adding an expense', async () => {
    const { getByLabelText, getByText } = render(<ExpenseForm />);
    const titleInput = getByLabelText('Title');
    const descriptionInput = getByLabelText('Description');
    const categorySelect = getByLabelText('Category');
    const typeSelect = getByLabelText('Type');
    const costInput = getByLabelText('Cost');
    const submitButton = getByText('Add expense');

    fireEvent.change(titleInput, { target: { value: 'Test Expense' } });
    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
    fireEvent.change(categorySelect, { target: { value: 'category1' } });
    fireEvent.change(typeSelect, { target: { value: 'type1' } });
    fireEvent.change(costInput, { target: { value: '50' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(addExpense).toHaveBeenCalledWith({
        title: 'Test Expense',
        description: 'Test Description',
        category: 'category1',
        type: 'type1',
        cost: 50,
      });
    });
  });
});
