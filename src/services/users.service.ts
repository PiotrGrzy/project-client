import { SignInUserInput } from '@/models/signIn.schema';
import { CreateUserInput } from '@/models/signup.schema';
import { VerifyUserInput } from '@/models/verify.schema';
import axios from '@/services/axios.instance';

export const createUser = async (payload: CreateUserInput) => axios.post('users', JSON.stringify(payload));
export const signInUser = async (payload: SignInUserInput) => axios.post('sessions', JSON.stringify(payload));
export const getSession = async () => axios.get('sessions');
export const verifyUser = async (payload: VerifyUserInput) =>
  axios.get(`users/verify/${payload.id}/${payload.verificationCode}`);
