import http from 'http-common';
import { ExpenseUserInput } from 'models/expense.schema';

export const addExpense = async (payload: ExpenseUserInput) => http.post('expenses', JSON.stringify(payload));
