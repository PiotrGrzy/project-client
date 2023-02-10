import { useQuery, useQueryClient } from '@tanstack/react-query';

import { SignInUserInput } from '@/models/signIn.schema';
import { CreateUserInput } from '@/models/signup.schema';
import { VerifyUserInput } from '@/models/verify.schema';
import axios from '@/services/axios.instance';

export enum ROLE {
  USER = 'user',
  ADMIN = 'admin',
}

export type User = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: ROLE;
  createdAt: string;
  updatedAt: string;
  iat: number;
  exp: number;
};

export const createUser = async (payload: CreateUserInput) => axios.post('users', JSON.stringify(payload));
export const signInUser = async (payload: SignInUserInput) => axios.post('sessions', JSON.stringify(payload));
export const verifyUserAccount = async (payload: VerifyUserInput) =>
  axios.get(`users/verify/${payload.id}/${payload.verificationCode}`);
export const getCurrentUser = async (): Promise<User> => {
  const response = await axios.get('users/me');
  return response.data;
};
export const logoutUser = async () => axios.post('sessions/logout');

export const useUserQuery = () => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
    cacheTime: 15 * 60 * 1000,
    retry: 0,
    onError: () => {
      queryClient.setQueriesData(['user'], null);
    },
  });
};
