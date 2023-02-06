import { ExpenseUserInput } from 'models/expense.schema';
import http from 'http-common';

export const addExpense = async (payload: ExpenseUserInput) => http.post('expenses', JSON.stringify(payload));
