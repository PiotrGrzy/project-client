import { CreateUserInput } from 'models/signup.schema';
import { SignInUserInput } from 'models/signIn.schema';
import http from 'http-common';
import { VerifyUserInput } from 'models/verify.schema';

export const createUser = async (payload: CreateUserInput) => http.post('users', JSON.stringify(payload));
export const signInUser = async (payload: SignInUserInput) => http.post('sessions', JSON.stringify(payload));
export const getSession = async () => http.get('sessions');
export const verifyUser = async (payload: VerifyUserInput) =>
  http.get(`users/verify/${payload.id}/${payload.verificationCode}`);
