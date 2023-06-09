import { CategoryType } from '@/models/expense.schema';

export function getFormDirtyValues(dirtyFields: object | boolean, allValues: object): object {
  if (dirtyFields === true || Array.isArray(dirtyFields)) return allValues;
  return Object.fromEntries(
    Object.keys(dirtyFields).map((key) => [key, getFormDirtyValues(dirtyFields[key], allValues[key])]),
  );
}

export const getExpenseColor = (expenseId: CategoryType): string => {
  const colors = {
    food: '#32a852',
    entertainment: '#a8328b',
    media: '#32a89b',
    rent: '#a0a832',
    car: '#a83250',
    house: '#a86f32',
    taxes: '#a84e32',
    insurence: '#3264a8',
    other: '#a8a432',
    loan: '#a83236',
    clothes: '#91a832',
  };

  return colors[expenseId];
};
