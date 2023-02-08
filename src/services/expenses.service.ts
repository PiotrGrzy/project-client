import { ExpenseUserInput } from '@/models/expense.schema';
import axios from '@/services/axios.instance';

export const addExpense = async (payload: ExpenseUserInput) => axios.post('expenses', JSON.stringify(payload));
