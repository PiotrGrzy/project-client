import React, { createContext, useContext, useState } from 'react';

export type UserType = {
  id: string;
  name: string;
  email: string;
};

export interface IUserContext {
  user: UserType | null;
  setUser?: (user: UserType | null) => void;
}

export const exampleUser = {
  id: '124asaswdewcs',
  name: 'Joe Doe',
  email: 'joe@example.com',
};

const defaultContext = {
  user: null,
};

const UserContext = createContext<IUserContext>(defaultContext);

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(exampleUser);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const { user } = useContext(UserContext);

  return user;
};

export const useSetUser = () => {
  const { setUser } = useContext(UserContext);

  return setUser;
};

export default UserContextProvider;
