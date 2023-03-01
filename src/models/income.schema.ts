import { coerce, object, string, TypeOf } from 'zod';

import { zodIntervalTypeEnum } from './expense.schema';

export const incomeSchema = object({
  title: string()
    .min(1, {
      message: 'Title is required',
    })
    .max(64, 'Title maximum length is 64 chars'),
  value: coerce.number().nonnegative('Cost must be larger than 0'),
  type: zodIntervalTypeEnum,
});

export type IncomeUserInput = TypeOf<typeof incomeSchema>;
