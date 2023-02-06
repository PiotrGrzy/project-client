import { object, string, TypeOf } from 'zod';

export const signInUserSchema = object({
  email: string()
    .min(1, {
      message: 'Email is required',
    })
    .email('Not a valid email'),
  password: string().min(1, 'Password is required'),
});

export type SignInUserInput = TypeOf<typeof signInUserSchema>;
