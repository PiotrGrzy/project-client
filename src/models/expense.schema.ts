import z, { coerce, number, object, string, TypeOf } from 'zod';

const zodCostCategoryEnum = z.enum([
  'food',
  'entertainment',
  'media',
  'rent',
  'car',
  'house',
  'taxes',
  'insurence',
  'other',
  'loan',
  '',
]);
const zodExpenseTypeEnum = z.enum(['once', 'daily', 'weekly', 'monthly', 'quarterly', 'yearly']);

export type ExpenseType = z.infer<typeof zodExpenseTypeEnum>;
export type CategoryType = z.infer<typeof zodCostCategoryEnum>;

export const expenseSchema = object({
  title: string()
    .min(1, {
      message: 'Title is required',
    })
    .max(64, 'Title maximum length is 64 chars'),
  description: string().max(255, 'Description maximum length is 255 chars'),
  cost: coerce.number().nonnegative('Cost must be larger than 0'),
  type: zodExpenseTypeEnum,
  category: zodCostCategoryEnum,
});

export type ExpenseUserInput = TypeOf<typeof expenseSchema>;
