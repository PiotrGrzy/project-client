import { object, string, TypeOf } from 'zod';

export const createUserSchema = object({
  firstName: string().min(1, {
    message: 'Firstname is required',
  }),
  lastName: string().min(1, {
    message: 'Lastname is required',
  }),
  password: string()
    .min(1, {
      message: 'Password is required',
    })
    .min(6, 'Password too short - should be 6 chars minimum'),
  passwordConfirmation: string().min(1, {
    message: 'Password Confirmation is required',
  }),
  email: string()
    .min(1, {
      message: 'Email is required',
    })
    .email('Not a valid email'),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: 'Passwords do not match',
  path: ['passwordConfirmation'],
});

export type CreateUserInput = TypeOf<typeof createUserSchema>;
