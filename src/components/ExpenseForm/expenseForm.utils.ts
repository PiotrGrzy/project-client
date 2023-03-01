import { CategoryType, ExpenseUserInput, IntervalType } from '@/models/expense.schema';

export const initialValues: ExpenseUserInput = {
  title: '',
  description: '',
  category: 'food',
  type: 'once',
  cost: 0,
};

export const intervalTypeOptions: { value: IntervalType; label: string }[] = [
  { value: 'once', label: 'Once' },
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'quarterly', label: 'Quarterly' },
  { value: 'yearly', label: 'Yearly' },
];

export const expenseCategoryOptions: { value: CategoryType; label: string }[] = [
  { value: 'food', label: 'Food' },
  { value: 'entertainment', label: 'Entertainment' },
  { value: 'house', label: 'House' },
  { value: 'insurence', label: 'Insurence' },
  { value: 'loan', label: 'Loan' },
  { value: 'media', label: 'Media' },
  { value: 'rent', label: 'Rent' },
  { value: 'taxes', label: 'Taxes' },
  { value: 'clothes', label: 'Clothes' },
  { value: 'other', label: 'Other' },
];
