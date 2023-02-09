import { useQuery } from '@tanstack/react-query';

import { SignInUserInput } from '@/models/signIn.schema';
import { CreateUserInput } from '@/models/signup.schema';
import { VerifyUserInput } from '@/models/verify.schema';
import axios from '@/services/axios.instance';

enum ROLE {
  USER = 'user',
  ADMIN = 'admin',
}

type User = {
  _id: string;
  email: string;
  firstName: string;
  lastName: 'G';
  role: ROLE;
  createdAt: string;
  updatedAt: string;
  iat: number;
  exp: number;
};

export const createUser = async (payload: CreateUserInput) => axios.post('users', JSON.stringify(payload));
export const signInUser = async (payload: SignInUserInput) => axios.post('sessions', JSON.stringify(payload));
export const getCurrentUser = async (): Promise<User> => {
  const response = await axios.get('users/me');
  return response.data;
};
export const getSession = async () => axios.get('sessions');
export const verifyUser = async (payload: VerifyUserInput) =>
  axios.get(`users/verify/${payload.id}/${payload.verificationCode}`);

export const useUserQuery = () => useQuery({ queryKey: ['user'], queryFn: getCurrentUser });
